<?php

include "connect.php";

$email = $_POST['email'];
$full_name = $_POST['full_name'];
$username = $_POST['username'];
$password = $_POST['password'];
$confirm = $_POST['confirm'];


//to check if email is not fake
if (filter_var($email,FILTER_VALIDATE_EMAIL) == false){
    echo "fake-email";
    exit;
}

//to check username length
if (strlen($username)<6){
    echo "short-username";
    exit;
}


//to check pass length
if (strlen($password)<6){
    echo "short-password";
    exit;
}


//to check password and confirm
if ($password != $confirm){
    echo "password-confirm";
    exit;
}

//to check if username exist
$select = $pdo->prepare("select * from user where username = '$username'");
$select ->execute();


if ($select->rowCount() == 0){
    $insert = $pdo->prepare("insert into user (email, full_name, username, password)
                                        values ('$email' , '$full_name' , '$username', '$password')");
    $insert->execute();
    echo "success";
}
else{
    echo "taken-username";
    exit;
}