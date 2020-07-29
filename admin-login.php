<?php

include "connect.php";

$username = $_POST['username'];
$password = $_POST['password'];
$secretKey = $_POST['secretKey'];


$select = $pdo->prepare("select * from admin where user = '$username' and password = '$password' and secret_key='$secretKey'");
$select->execute();



if($select->rowCount() == 0)
   {
       echo "0";
   }

else {
    session_start();
    $_SESSION["user"] = $username;
    echo $_SESSION["user"];
}
