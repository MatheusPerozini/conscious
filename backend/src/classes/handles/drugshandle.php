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
    public function salvar($req , $params){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "INSERT INTO salvos (id_user , id_droga) VALUES ('$body->id','$params')"
        );
        return json_encode($data);

    }
    public function desalvar($req , $params){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "DELETE FROM salvos WHERE '$body->id' AND '$params'"
        );
        return json_encode($data);
    }
}
?>