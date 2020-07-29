<?php

include "connect.php";

$id = $_POST['id'];
$email = $_POST['email'];
$fullname = $_POST['fullname'];
$username = $_POST['username'];
$password = $_POST['password'];

$update = $pdo->prepare("UPDATE user SET email='$email', full_name='$fullname', username='$username', password='$password' where id=$id");
$update->execute();