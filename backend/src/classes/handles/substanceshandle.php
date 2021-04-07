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
    public function pesquisar($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "SELECT * FROM substancias WHERE nome LIKE '%$body->pesquisar%' OR composicao LIKE '%$body->pesquisar%' OR usadas LIKE '%$body->pesquisar%' OR primeira_letra LIKE '%$body->pesquisar%'"
        );
        return json_encode($data);
    }
    public function alfabeto($letra){
        $this->sql = new Sql();
        $data = $this->sql->comandFetch(
            "SELECT * FROM substancias WHERE nome LIKE '$letra%'"
        );
        return json_encode($data);
    }
    public function informacao($params){
        $this->sql = new Sql();
        $data = $this->sql->comandFetch(
            "SELECT * FROM substancias WHERE id='$params'"
        );
        return json_encode($data);
    }
}
?>