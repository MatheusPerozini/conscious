<?php
namespace src;

header("Access-Control-Allow-Headers: *");
require("../vendor/autoload.php");

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use handles\userhandle;

//este erro pode ignorar
$app = new \Slim\app;
//$app->setBasePath('/myapp');

$user = new userhandle();

$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write("Hello, world!");
    return $response;
});

$app->get('/test' , function(Request $request, Response $response){
    global $user;
    $user->ALL($request, $response);
    return $response;
});

$app->run();
?>