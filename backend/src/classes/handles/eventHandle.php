<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class eventHandle {
    private $sql;

    public function events(){
        $this->sql = new Sql();
        $data = $this->sql->comandFetch(
            "SELECT * FROM eventos"
        );
        return json_encode($data);
    }
}
?>