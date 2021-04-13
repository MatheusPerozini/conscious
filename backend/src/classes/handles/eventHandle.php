<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;

class eventHandle {
    private $sql;

    public function events($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        if($body->pesquisa == null || $body->pesquisa == 'todos' || $body->pesquisa == 'Todos' || $body->pesquisa == 'TODOS'){
            $data = $this->sql->comandFetch(
                "SELECT * FROM eventos"
            );
        }else{
            $data = $this->sql->comandFetch(
                "SELECT * FROM eventos WHERE nome LIKE '$body->pesquisa' OR data_evento LIKE '$body->pesquisa' OR localizacao LIKE '$body->pesquisa'"
            );
        }
        return json_encode($data);
    }public function newEvents(){
        $this->sql = new Sql();
        $data = $this->sql->comandFetch(
            "SELECT * FROM eventos ORDER BY dt_colocada DESC LIMIT 3"
        );
        return json_encode($data);
    }
}
?>