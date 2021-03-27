<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class substanceshandle {
    private $sql;

    public function substancias(){
        $this->sql = new sql();
        $data = $this->sql -> comandFetch(
        "SELECT * FROM substancias"
        );
        return json_encode($data);
    }
}
?>