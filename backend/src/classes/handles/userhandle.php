<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;
use Slim\Http\StatusCode;

class userhandle {
    private $sql;

    public function register($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        if($this->sql->comandFetch(
         "SELECT * FROM users WHERE '$body->Email' OR '$body->Senha'"   
        )){
            return false;
        }else{
            $this->sql -> comand(
            "INSERT INTO users (senha , email) VALUES ('$body->Senha' , '$body->Email')"
            );
            return $req;
        }
    }
    public function login($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $check = $this->sql->comandFetch(
            "SELECT * FROM users WHERE email='$body->email' AND senha='$body->senha' "
        );
        if($check){
            $result = json_encode($check);
        }else{
            $result = false;
        }
        return $result;
    }
    public function verGrafico($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "select * from (select * from grafico order by dt_resposta desc limit 7) tmp order by tmp.dt_resposta asc"
        );
        return json_encode($data);
    }
    public function alterarGrafico($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "INSERT INTO grafico (id_user , repostas) VALUES ('$body->id','$body->resposta')"
        );
        return json_encode($data);
    }
    public function usuario($req){
        $this->sql = new Sql();
        $body = json_decode($req);
        $data = $this->sql->comandFetch(
            "SELECT * FROM users WHERE id='$body->id'"
        );
        return json_encode($data);
    }
}
//SELECT * FROM grafico WHERE id_user='$body->id' ORDER BY dt_resposta DESC LIMIT 7
?>