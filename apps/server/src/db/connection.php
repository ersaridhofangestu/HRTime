<?php
class connection {
    private $conn;

    public function __construct() {
        $this->conn = pg_connect("host=localhost port=5433 dbname=HRTime user=ersaridhof password=ersa04");

        if (!$this->conn) {
            if (!$this->conn) {
                http_response_code(500);
                echo json_encode([
                    "status" => "error",
                    "type" => "ConnectionError",
                    "message" => "Failed to connect to docker database, please run docker compose"
                ]);
                exit;
            }
        } 
    }

    public function getConnection() {
        return $this->conn;
    }

    public function closeConnection() {
        if ($this->conn) {
            pg_close($this->conn);
        }
    }
}
