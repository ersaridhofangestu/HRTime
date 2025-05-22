<?php
require_once(__DIR__ . '/employeeModule.php');
require_once(__DIR__ . '/employeeView.php');
class EmployeeController {

    public static function createEmployee($data) {
        try {
            EmployeeModule::create($data);
            EmployeeView::success("Employee created successfully.");
        } catch (Exception $e) {
            EmployeeView::error("CreateError", $e->getMessage(), 500);
        }
    }

    public static function getEmployees() {
        try {
            $employees = EmployeeModule::getAll();
            EmployeeView::success("Employee list retrieved successfully.", $employees);
        } catch (Exception $e) {
            EmployeeView::error("FetchError", $e->getMessage(), 500);
        }
    }

    public static function getEmployeeById($id) {
        try {
            $employee = EmployeeModule::getById($id);
            if ($employee) {
                EmployeeView::success("Employee retrieved successfully.", $employee);
            } else {
                EmployeeView::error("NotFound", "Employee not found.", 404);
            }
        } catch (Exception $e) {
            EmployeeView::error("FetchError", $e->getMessage(), 500);
        }
    }

    public static function updateEmployee($id, $data) {
        try {
            EmployeeModule::update($id, $data);
            EmployeeView::success("Employee updated successfully.");
        } catch (Exception $e) {
            EmployeeView::error("UpdateError", $e->getMessage(), 500);
        }
    }

    public static function deleteEmployee($id) {
        try {
            EmployeeModule::delete($id);
            EmployeeView::success("Employee deleted successfully.");
        } catch (Exception $e) {
            EmployeeView::error("DeleteError", $e->getMessage(), 500);
        }
    }
}
?>
