<?php

include "connect.php";

$username = $_POST['username'];
$password = $_POST['password'];


$select = $pdo->prepare("select * from user where username = '$username' and password = '$password'");
$select->execute();
$result= $select->fetchAll(PDO::FETCH_ASSOC);




if($select->rowCount() == 0)
   {
       echo '0';
   }

else {
    session_start();
    $_SESSION["user"] = $username;
    echo $_SESSION["user"];
}
