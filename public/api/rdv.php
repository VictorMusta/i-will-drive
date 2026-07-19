<?php
/**
 * i will drive — endpoint de prise de rendez-vous.
 * Reçoit le formulaire (POST), génère une invitation calendrier .ics
 * (Google Agenda / Outlook / Apple) et l'envoie par email :
 *  - à l'auto-école (contact@iwilldrive.fr)
 *  - en confirmation à l'élève
 * Tournne sur le webspace IONOS (PHP + mail()).
 */

header('Content-Type: application/json; charset=utf-8');

const SCHOOL_EMAIL = 'contact@iwilldrive.fr';
const SCHOOL_NAME  = 'i will drive — auto-école';
const TZ           = 'Europe/Paris';

// Types de RDV autorisés → durée en minutes (aligné sur src/consts.ts)
const SERVICES = [
    "Leçon de conduite — 1 h"              => 60,
    "Évaluation de départ — 1 h"           => 60,
    "Rendez-vous d'inscription — 30 min"   => 30,
    "Rendez-vous pédagogique AAC — 2 h"    => 120,
];
const SLOTS     = ['08:00', '09:15', '10:30', '13:30', '14:45', '16:00', '17:15'];
const LOCATIONS = ['Grand-Brassac', "À définir avec l'auto-école"];

function fail(int $code, string $msg): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'Méthode non autorisée.');
}

// Anti-spam : le champ pot de miel doit rester vide
if (!empty($_POST['website'])) {
    fail(400, 'Requête invalide.');
}

$firstname = trim($_POST['firstname'] ?? '');
$lastname  = trim($_POST['lastname'] ?? '');
$email     = trim($_POST['email'] ?? '');
$phone     = trim($_POST['phone'] ?? '');
$service   = trim($_POST['service'] ?? '');
$date      = trim($_POST['date'] ?? '');
$time      = trim($_POST['time'] ?? '');
$location  = trim($_POST['location'] ?? '');
$message   = trim($_POST['message'] ?? '');

if ($firstname === '' || $lastname === '' || $phone === '') {
    fail(400, 'Merci de remplir tous les champs obligatoires.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Adresse email invalide.');
}
if (!isset(SERVICES[$service])) {
    fail(400, 'Type de rendez-vous invalide.');
}
if (!in_array($time, SLOTS, true)) {
    fail(400, 'Créneau horaire invalide.');
}
if (!in_array($location, LOCATIONS, true)) {
    $location = LOCATIONS[0];
}
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
    fail(400, 'Date invalide.');
}

try {
    $tz    = new DateTimeZone(TZ);
    $start = new DateTimeImmutable("$date $time", $tz);
    $now   = new DateTimeImmutable('today', $tz);
    if ($start < $now->modify('+1 day')) {
        fail(400, 'Merci de choisir une date à partir de demain.');
    }
    $end = $start->modify('+' . SERVICES[$service] . ' minutes');
} catch (Exception $e) {
    fail(400, 'Date ou heure invalide.');
}

/* ---------- Construction du fichier .ics ---------- */

function icsEscape(string $s): string {
    return str_replace(["\\", ";", ",", "\r\n", "\n"], ["\\\\", "\\;", "\\,", "\\n", "\\n"], $s);
}

$uid     = uniqid('rdv-', true) . '@iwilldrive.fr';
$dtstamp = gmdate('Ymd\THis\Z');
$summary = icsEscape("$service — $firstname $lastname");
$desc    = icsEscape(
    "Élève : $firstname $lastname\n" .
    "Téléphone : $phone\n" .
    "Email : $email\n" .
    ($message !== '' ? "Message : $message\n" : '') .
    "Demande envoyée depuis iwilldrive.fr"
);
$loc = icsEscape($location);

$ics = implode("\r\n", [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//i will drive//RDV//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:Europe/Paris',
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:+0100',
    'TZOFFSETTO:+0200',
    'TZNAME:CEST',
    'DTSTART:19700329T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
    'END:DAYLIGHT',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:+0200',
    'TZOFFSETTO:+0100',
    'TZNAME:CET',
    'DTSTART:19701025T030000',
    'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    "UID:$uid",
    "DTSTAMP:$dtstamp",
    'DTSTART;TZID=Europe/Paris:' . $start->format('Ymd\THis'),
    'DTEND;TZID=Europe/Paris:' . $end->format('Ymd\THis'),
    "SUMMARY:$summary",
    "LOCATION:$loc",
    "DESCRIPTION:$desc",
    'STATUS:TENTATIVE',
    'END:VEVENT',
    'END:VCALENDAR',
]);

/* ---------- Envoi des emails (multipart avec pièce jointe .ics) ---------- */

function sendMailWithIcs(string $to, string $subject, string $text, string $ics, string $replyTo): bool {
    $boundary = '=_iwd_' . md5(uniqid('', true));
    $headers = implode("\r\n", [
        'From: ' . SCHOOL_NAME . ' <' . SCHOOL_EMAIL . '>',
        "Reply-To: $replyTo",
        'MIME-Version: 1.0',
        "Content-Type: multipart/mixed; boundary=\"$boundary\"",
    ]);
    $body = implode("\r\n", [
        "--$boundary",
        'Content-Type: text/plain; charset=utf-8',
        'Content-Transfer-Encoding: 8bit',
        '',
        $text,
        '',
        "--$boundary",
        'Content-Type: text/calendar; charset=utf-8; method=PUBLISH; name="rendez-vous.ics"',
        'Content-Transfer-Encoding: base64',
        'Content-Disposition: attachment; filename="rendez-vous.ics"',
        '',
        chunk_split(base64_encode($ics)),
        "--$boundary--",
    ]);
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    return mail($to, $encodedSubject, $body, $headers);
}

$dateFr = $start->format('d/m/Y');
$slotFr = $start->format('H\hi') . ' → ' . $end->format('H\hi');

$textSchool =
    "Nouvelle demande de rendez-vous depuis iwilldrive.fr\n\n" .
    "Type       : $service\n" .
    "Date       : $dateFr\n" .
    "Créneau    : $slotFr\n" .
    "Lieu       : $location\n\n" .
    "Élève      : $firstname $lastname\n" .
    "Téléphone  : $phone\n" .
    "Email      : $email\n" .
    ($message !== '' ? "Message    : $message\n" : '') .
    "\nOuvrez la pièce jointe pour ajouter le rendez-vous à votre calendrier (Google Agenda, Outlook, Apple).";

$textStudent =
    "Bonjour $firstname,\n\n" .
    "Votre demande de rendez-vous a bien été transmise à i will drive :\n\n" .
    "Type    : $service\n" .
    "Date    : $dateFr\n" .
    "Créneau : $slotFr\n" .
    "Lieu    : $location\n\n" .
    "L'enseignant vous confirmera ce créneau rapidement.\n" .
    "La pièce jointe vous permet d'ajouter le rendez-vous à votre calendrier en un clic.\n\n" .
    "À bientôt sur la route !\n" .
    SCHOOL_NAME . " — iwilldrive.fr — 07 84 27 01 43";

$okSchool  = sendMailWithIcs(SCHOOL_EMAIL, "RDV $dateFr $time — $firstname $lastname ($service)", $textSchool, $ics, $email);
$okStudent = sendMailWithIcs($email, "Votre demande de rendez-vous — i will drive", $textStudent, $ics, SCHOOL_EMAIL);

if (!$okSchool) {
    fail(500, "L'envoi a échoué côté serveur. Contactez-nous par téléphone ou email.");
}

echo json_encode(['ok' => true, 'studentCopy' => $okStudent], JSON_UNESCAPED_UNICODE);
