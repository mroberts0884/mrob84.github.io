<!DOCTYPE html>
<?php
    $name = $email = $message = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST['message']);

        if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
            echo "Please fill in all fields correctly.";
            exit;
        }
        
        $recipient = "mroberts0884@gmail.com";
        $subject = "New message from $name";
        $email_content = "Name: $name\nEmail: $email\nMessage: $message\n";
        $email_header = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_header)) {
            echo "Thank you. Your message has been sent.";
        }

        else {
            echo "Something went wrong. Your message could not be sent.";
        }

    
    }
?>
</html>
