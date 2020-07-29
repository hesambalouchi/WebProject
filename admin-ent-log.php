<?php

include "connect.php";

$username = $_POST['username'];
$secretKey = $_POST['secretKey'];



$insert = $pdo->prepare("insert into admin_logs (user, secret_key)
                                    values ('$username' , '$secretKey')");
$insert->execute();
echo "success";

