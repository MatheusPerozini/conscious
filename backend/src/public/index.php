<?php
namespace src;

header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
require __DIR__ . '/../vendor/autoload.php';

use handles\drugshandle;
use handles\substanceshandle;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use handles\userhandle;
use handles\eventHandle;

$app = new \Slim\app;
//$app->setBasePath('/myapp');

$event = new eventHandle();
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

$app->post('/salvar/{id}',function(Request $request ,Response $response , $args){
    global $drogas;
    $body = $request->getBody();
    $stmt = $drogas->salvar($body , $args['id']);
    return $response->getBody()->write($stmt);
});
$app->post('/desalvar/{id}',function(Request $request , Response $response , $args){
    global $drogas;
    $body = $request->getBody();
    $stmt = $drogas->desalvar($body , $args['id']);
    return $response->getBody()->write($stmt);
});

$app->post('/grafico',function(Request $request , Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->verGrafico($body);
    return $response->getBody()->write($stmt);
});
$app->post('/editgrafico',function(Request $request , Response $response){
    global $user;
    $body = $request->getBody();
    $stmt = $user->alterarGrafico($body);
    return $response->getBody()->write($stmt);
});

$app->get('/drogas', function (Request $request, Response $response) {
    global $drogas;
    $stmt = $drogas->drogas();
    $response->getBody()->write($stmt);
    return $response;
});
$app->post('/drogaspesquisa',function(Request $request, Response $response){
    global $drogas;
    $body = $request->getBody();
    $stmt = $drogas->pesquisar($body);
    return $response->getBody()->write($stmt);
});
$app->post('/drogas/{id}' , function(Request $request, Response $response , $args){
    global $drogas;
    $stmt = $drogas->informacoes($args['id']);
    return $response->getBody()->write($stmt);
});

$app->get('/substancias' , function(Request $request, Response $response){
    global $substancias;
    $stmt = $substancias->substancias();
    $response->getBody()->write($stmt);
    return $response;
});
$app->post('/substanciaspesquisa' , function(Request $request, Response $response){
    global $substancias;
    $body = $request->getBody();
    $stmt = $substancias->pesquisar($body);
    return $response->getBody()->write($stmt);
});
$app->post('/substancias/{letra}' , function(Request $request, Response $response , $args){
    global $substancias;
    $stmt = $substancias->alfabeto($args['letra']);
    return $response->getBody()->write($stmt);
});
$app->post('/substanciasinfo/{id}' , function(Request $request, Response $response , $args){
    global $substancias;
    $stmt = $substancias->informacao($args['id']);
    return $response->getBody()->write($stmt);
});

$app->get('/neweventos',function(Request $request, Response $response){
    global $event;
    $stmt = $event->newEvents();
    return $response->getBody()->write($stmt);
});
$app->post('/eventos' , function(Request $request, Response $response){
    global $event;
    $body = $request->getBody();
    $stmt = $event->events($body);
    return $response->getBody()->write($stmt);
});

$app->run();
?>