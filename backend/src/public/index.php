<?php
namespace src;

header("Access-Control-Allow-Headers: *");
require __DIR__ . '/../vendor/autoload.php';

use handles\drugshandle;
use handles\substanceshandle;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use handles\userhandle;

$app = new \Slim\app;
//$app->setBasePath('/myapp');

$user = new userhandle();
$substancias = new substanceshandle();
$drogas = new drugshandle();

$app->post('/register' , function(Request $request, Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->register($body);
    if($stmt == false){
        $response->withStatus(400)->getBody()->write('Conta ja criada');
    }else{
        $response->getBody()->write($stmt);
    }
    return $response;
});
$app->post('/logon' , function(Request $request , Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->login($body);
    if($stmt == false){
        return $response->withStatus(400)->getBody()->write('Not permited');
    }else{
        $response->getBody()->write($stmt);
    }
    return $response;
});
$app->post('/user' , function(Request $request, Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->usuario($body);
    return $response->getBody()->write($stmt);    
});
$app->post('/salvar/:id',function(Request $request ,Response $response , $id){
    global $user;
    $body = $request->getBody();
    $stmt = $user->salvar($body , $id);
    return $response->getBody()->write($stmt);
});
$app->post('/desalvar/:id',function(Request $request , Response $response , $id){
    global $user;
    $body = $request->getBody();
    $stmt = $user->desalvar($body , $id);
});
$app->get('/grafico',function(Request $request , Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->verGrafico($body);
});
$app->post('/editGrafico',function(Request $request , Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->alterarGrafico($body);
});

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