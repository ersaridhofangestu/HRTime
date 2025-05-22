<?php

class Connection {
    private static $conn = null; 
    private function __construct() {}
    private function __clone() {}
    private function __wakeup() {}

    public static function getConnection() {
        if (self::$conn === null) {
            self::$conn = @pg_connect("host=localhost port=5433 dbname=HRTime user=ersaridhof password=ersa04");
            if (!self::$conn) {
                $error_message = pg_last_error() ?: "Unknown database connection error. Check credentials or database server status.";
                throw new Exception("Failed to connect to database: " . $error_message);
            }
        }
        return self::$conn;
    }

    public static function closeConnection() {
        if (self::$conn !== null) {
            pg_close(self::$conn);
            self::$conn = null;
        }
    }
}