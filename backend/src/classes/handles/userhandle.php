<?php
namespace handles;

header("Access-Control-Allow-Headers: *");
//require_once("../../../vendor/autoload.php"); 

use connection\Sql;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class userhandle {
    private $sql;

    public function ALL(Request $request, Response $response){
        $this->sql = new sql();
        
        $stmt = $this->sql -> comand(
        "SELECT * FROM substancias"
        );
        $response->getBody()->write($stmt);
        return $response;
    } 
}
?>