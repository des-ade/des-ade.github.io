<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $name = $_POST["inputName"];
  $subject = $_POST["inputSubject"]
  $email = $_POST["inputEmail"];
  $message = $_POST["inputMessage"];

  // Compose email
  $to = "desadeyanju@yahoo.ca";
  $subject = "New form submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message . "\n";

  // Send email
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo "Thank you for your submission!";
  } else {
    // Failed to send email
    echo "Oops! Something went wrong.";
  }
}
?>