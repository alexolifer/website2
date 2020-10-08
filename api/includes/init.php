<?php

    header("Access-Control-Allow-Origin: *");

    $db = new mysqli('localhost','root','','react_project');

    if($db->error){
        die($db->error);
    }

    $db->set_charset('utf8mb4');

?>
