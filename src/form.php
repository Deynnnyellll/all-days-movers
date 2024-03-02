<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "inquiry@alldaysmovers.com";
    $subject = "New Inquiry";
    $headers = "From: $name <$email>";

    mail($to, $subject, $message, $headers);
    echo "Form submission successful!";
} else {
    echo "Invalid request";
}
?>