<?php

ini_set('display_errors', '0');
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require(__DIR__ . '/src/employee/employeeController.php');

$request_method = $_SERVER['REQUEST_METHOD'];

header('Content-Type: application/json');

try {
    switch ($request_method) {
        case 'GET':
            if (isset($_GET['id'])) {
                EmployeeController::getEmployeeById($_GET['id']);
            } else {
                EmployeeController::getEmployees();
            }
            break;

        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data)) {
                throw new Exception("Invalid data received for POST request.");
            }
            EmployeeController::createEmployee($data);
            break;

        case 'PUT':
            if (!isset($_GET['id'])) {
                throw new Exception("Employee ID is required for PUT request.");
            }
            $id = $_GET['id'];
            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data)) {
                throw new Exception("Invalid data received for PUT request.");
            }
            EmployeeController::updateEmployee($id, $data);
            break;

        case 'DELETE':
            if (!isset($_GET['id'])) {
                throw new Exception("Employee ID is required for DELETE request.");
            }
            $id = $_GET['id'];
            EmployeeController::deleteEmployee($id);
            break;

        default:
            echo json_encode(["message" => "Method not allowed"]);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage(),
    ]);
    exit();
}
?>
