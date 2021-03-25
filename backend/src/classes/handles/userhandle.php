<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class userhandle {
    private $sql;

    public function register($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql -> comandFetch(
            "INSERT INTO users (senha , email) VALUES ($body->senha , $body->email)"
        );
        return json_encode($data);
    }
}
?>