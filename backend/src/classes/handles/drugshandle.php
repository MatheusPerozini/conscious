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
    public function pesquisar($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        if($body->pesquisar == null || $body->pesquisar == 'todos'){
            $data = $this->sql->comandFetch(
                "SELECT * FROM drogas"
            );
        }if($body->pesquisar == 'salvos'){
            $data = $this->sql->comandFetch(
                "SELECT * FROM salvos WHERE id_user='$body->id'"
            );
        }else{
            $data = $this->sql->comandFetch(
                "SELECT * FROM drogas WHERE nome LIKE '%$body->pesquisar%' OR substancias_presentes LIKE '%$body->pesquisar%' OR tipo LIKE '%$body->pesquisar%'"
            );
        }
        return json_encode($data);
    }
    public function informacoes($params){
        $this->sql = new Sql();
        $data = $this->sql->comandFetch(
            "SELECT * FROM drogas WHERE id='$params'"
        );
        return json_encode($data);
    }
}
?>