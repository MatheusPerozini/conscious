<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class userhandle {
    private $sql;

    public function ALL(){
        $this->sql = new sql();
        $test = $this->sql -> comandFetch(
        "SELECT * FROM substancias"
        );
        foreach($test as $row){
            foreach($row as $key => $value){
                echo '<p> '.$key. ' e '. $value.'</p>';
            }
        }
    } 
}
?>