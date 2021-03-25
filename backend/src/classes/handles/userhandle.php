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
         "SELECT * FROM users WHERE '$body->email' OR '$body->senha'"   
        )){
            return false;
        }else{
            $this->sql -> comand(
            "INSERT INTO users (senha , email) VALUES ('$body->senha' , '$body->email')"
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
    public function salvar($req , $params){
        //vai pegar o array para poder salvar a droga , talvez criar pivate funciton
        $this->sql = new Sql();
        $body = json_decode($req);

    }
    public function desalvar($req , $params){
        //vai tirar do array para poder salvar a droga , talvez criar pivate function
        $this->sql = new Sql();
        $body = json_decode($req);
    }
    public function verGrafico($req){
        //vai ter q criar uma nova tabela ,  que vai buscar os dados e alterar
        $this->sql = new Sql();
        $body = json_decode($req);
    }
    public function alterarGrafico($req){
        $this->sql = new Sql();
        $body = json_decode($req);
    }
}
?>