<?php

    require('includes/init.php');

    if(isset($_POST['folder'])){
        $folder = $db->real_escape_string($_POST['folder']);
        $db->query("DELETE FROM folders WHERE folder_id = '$folder'");
    }

?>
