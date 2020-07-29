<?php

include "connect.php";

$read = $pdo->prepare("select * from user");
$read->execute();

$result= $read->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result, JSON_UNESCAPED_UNICODE);
