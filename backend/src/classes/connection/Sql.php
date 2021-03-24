<?php

namespace connection{

use PDO;

class Sql{
        const dbname = "db_php";
        const host = "localhost";
        const login = "root";
        const password = "";

        private $conn;

        public function __construct(){
            $this->conn = new PDO(
                "mysql:dbname=".sql::dbname.";host=".sql::host,sql::login,sql::password
            );
        }
        public function comand($query){
            $stmt = $this->conn -> prepare($query);
            $stmt -> execute();

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
}
/*
$conn = new PDO("mysql:dbname=db_php;host=localhost" , 'root' , '');

$conn->beginTransaction();

$stmt = $conn -> prepare("SELECT * FROM substancias");

$stmt->execute();

//$conn->rollBack();
$conn->commit();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($result as $row){
    foreach($row as $key => $value){
        echo '<p> '.$key. ' e '. $value.'</p>';
    }
}

var_dump($result)
*/
?>