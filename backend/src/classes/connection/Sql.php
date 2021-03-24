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
        public function comandFetch($query){
            $stmt = $this->conn -> prepare($query);
            $stmt -> execute();

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        public function comand($query){
            $stmt = $this->conn -> prepare($query);
            $stmt -> execute();

            return $stmt;
        }
    }
}
?>