<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Create the email
    $to = "mrfarrow2013@gmail.com";
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);
}
?>