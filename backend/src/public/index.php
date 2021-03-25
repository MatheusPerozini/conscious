<?php
namespace src;

header("Access-Control-Allow-Headers: *");
require("../vendor/autoload.php");

use handles\drugshandle;
use handles\substanceshandle;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use handles\userhandle;

$app = new \Slim\app;
//$app->setBasePath('/myapp');

$user = new userhandle();
$substancias = new substanceshandle();
$drogas = new drugshandle();

$app->get('/drogas', function (Request $request, Response $response) {
    global $drogas;
    $stmt = $drogas->drogas();
    $response->getBody()->write($stmt);
    return $response;
});

$app->get('/substancias' , function(Request $request, Response $response){
    global $substancias;
    $stmt = $substancias->substancias();
    $response->getBody()->write($stmt);
    return $response;
});

$app->run();
?>