<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class drugshandle {
    private $sql;

    public function drogas(){
        $this->sql = new Sql();
        $data = $this->sql -> comandFetch(
            'SELECT * FROM drogas'
        );
        return json_encode($data);
    }
}
?>