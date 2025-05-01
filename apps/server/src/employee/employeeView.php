<?php

class employeeView {
    
    public static function success($message, $data = null) {
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data,
            'timestamp' => date('c') 
        ];
        self::respond($response);
    }

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

    private static function respond($response) {
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
        exit;
    }
}

?>
