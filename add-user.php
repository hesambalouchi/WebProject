<?php
 include "connect.php";

$email = $_POST['email'];
$fname = $_POST['fullname'];
$uname = $_POST['username'];
$pass = $_POST['password'];

if ($email=="" || $fname=="" || $uname==""|| $pass==""){
    echo 0;
    exit;
}

$insert = $pdo->prepare("insert into user(email, full_name, username, password) 
                                                values ('$email', '$fname', '$uname', '$pass')");
$exe = $insert->execute();

echo $exe;
