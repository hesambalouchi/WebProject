<?php

include "connect.php";

$id = $_POST['id'];

$delete = $pdo->prepare("delete from comments where id=$id");
$delete->execute();