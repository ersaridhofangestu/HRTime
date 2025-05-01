<?php
require_once(__DIR__ . '/employeeModule.php');
require_once(__DIR__ . '/employeeView.php');
class EmployeeController {
    private $employeeModule;

    public function __construct() {
        $this->employeeModule = new EmployeeModule();
    }

    public function createEmployee($data) {
        try {
            $this->employeeModule->create($data);
            EmployeeView::success("Employee created successfully.");
        } catch (Exception $e) {
            EmployeeView::error("CreateError", $e->getMessage(), 500);
        }
    }

    public function getEmployees() {
        try {
            $employees = $this->employeeModule->getAll();
            EmployeeView::success("Employee list retrieved successfully.", $employees);
        } catch (Exception $e) {
            EmployeeView::error("FetchError", $e->getMessage(), 500);
        }
    }

    public function getEmployeeById($id) {
        try {
            $employee = $this->employeeModule->getById($id);
            if ($employee) {
                EmployeeView::success("Employee retrieved successfully.", $employee);
            } else {
                EmployeeView::error("NotFound", "Employee not found.", 404);
            }
        } catch (Exception $e) {
            EmployeeView::error("FetchError", $e->getMessage(), 500);
        }
    }

    public function updateEmployee($id, $data) {
        try {
            $this->employeeModule->update($id, $data);
            EmployeeView::success("Employee updated successfully.");
        } catch (Exception $e) {
            EmployeeView::error("UpdateError", $e->getMessage(), 500);
        }
    }

    public function deleteEmployee($id) {
        try {
            $this->employeeModule->delete($id);
            EmployeeView::success("Employee deleted successfully.");
        } catch (Exception $e) {
            EmployeeView::error("DeleteError", $e->getMessage(), 500);
        }
    }
}
?>
