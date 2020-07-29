<?php

include "connect.php";

$id = $_POST['id'];

$delete = $pdo->prepare("delete from user where id=$id");
$delete->execute();