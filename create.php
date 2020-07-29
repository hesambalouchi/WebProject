<?php
 include "connect.php";


 $quiz = $_POST['mark'];
 session_start();
$username = $_SESSION["user"];



$select = $pdo->prepare("select * from user where username = '$username' and score is NULL");
$select ->execute();

if ($select->rowCount() != 0){
    $update = $pdo->prepare("UPDATE user SET score = '$quiz' where username = '$username'");
    $exe = $update->execute();
    echo '1';
}

else{
    echo '0';
}


