<?php

require('includes/init.php');

    /*public function showAbout(){
        $aboutData=$this->dbConnect()->prepare("SELECT * FROM about");
        $aboutData->execute();
        
        $eachAbout = [];
        $indexAbout = 0;

        while($Fetch=$aboutData->fetch(PDO::FETCH_ASSOC)){
            $eachAbout[$indexAbout]=[
                "id"=>$Fetch['id'],
                "title"=>$Fetch['title'],
                "image"=>$Fetch['image'],
                "text"=>$Fetch['text'],
            ];
            $indexAbout++;
        }
        
            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($eachAbout);
    }*/