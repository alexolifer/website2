<?php

    require 'includes/init.php';

    //Query DB
    $query = $db->query("SELECT * FROM messages ORDER BY id DESC");

    //Check query error
    if($db->error){
        die($db->error);
    }

    $messages = [];

    //Loop query
    while( $row = $query->fetch_object() ){
        //Format lead
        $row->post_lead = strlen($row->post_text) > 100 ? substr($row->post_text,0,100).'...' : $row->post_text;
        //Format date
        $row->post_date = date('d M H:i',strtotime($row->post_date) );
        //Store row into array
        $messages[] = $row;
    }

    //Echo json
    echo json_encode($messages);

?>
