<?php

class employeeView {
    
    // Response sukses
    public static function success($message, $data = null) {
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data,
            'timestamp' => date('c') // ISO 8601 timestamp
        ];
        self::respond($response);
    }

    // Response error umum
    public static function error($type, $message, $code = 500) {
        http_response_code($code);
        $response = [
            'success' => false,
            'error' => [
                'type' => $type,
                'message' => $message
            ],
            'timestamp' => date('c')
        ];
        self::respond($response);
    }

    // Method respon helper
    private static function respond($response) {
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
        exit;
    }
}

?>
