<?php
 include "connect.php";

$email = $_POST['email'];
$username = $_POST['fname'];
$subject = $_POST['subject'];
$message = $_POST['message'];



$select = $pdo->prepare("select * from comments where name = '$username' or email='$email'");
$select ->execute();

if ($select->rowCount() == 0){
    $insert = $pdo->prepare("insert into comments (email, name, subject, message)
                                        values ('$email' , '$username' , '$subject', '$message')");
    $exe = $insert->execute();
    echo '1';
}

else{
    echo '0';
}


