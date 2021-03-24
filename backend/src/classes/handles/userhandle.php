<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class userhandle {
    private $sql;

    public function ALL(){
        $this->sql = new sql();
        $test = $this->sql -> comand(
        "SELECT * FROM substancias"
        );

        return var_dump($test);
    } 
}
?>