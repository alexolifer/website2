<?php

    require 'includes/init.php';

    $name = $db->real_escape_string($_POST['name']);
    $email = $db->real_escape_string($_POST['email']);
    $subject = $db->real_escape_string($_POST['subject']);
    $text = $db->real_escape_string($_POST['message']);

    $db->query("INSERT INTO messages (name, email, subject, message) VALUES ('$name' , '$email', '$subject', '$message')");


?>
