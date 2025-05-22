<?php
require_once(__DIR__ . '/../db/connection.php');
require(__DIR__ . '/../db/query.php');

class EmployeeModule {

    public static function getAll() {
        $result = pg_query(Connection::getConnection(), (new Queries())->getAllGajiKaryawan);
        if (!$result) {
            throw new Exception("Error fetching all employees: " . pg_last_error(Connection::getConnection()));
        }
        $data = pg_fetch_all($result);
        if (!$data) {
            throw new Exception("No employees found.");
        }
        return $data;
    }

    public static function getById($id) {
        $result = pg_query_params(Connection::getConnection(), (new Queries())->getKaryawanById, array($id));
        if (!$result) {
            throw new Exception("Error fetching employee by ID: " . pg_last_error(Connection::getConnection()));
        }
        return pg_fetch_assoc($result);
    }

    public static function create($data) {
        if (empty($data['name']) || empty($data['status']) || empty($data['date']) || empty($data['entry_time']) || empty($data['clock_out'])) {
            throw new Exception("All fields are required.");
        }

        $result = pg_query_params(
            Connection::getConnection(), 
            (new Queries())->createdGajiKaryawan,
            array(
                $data['name'],
                $data['status'],
                $data['date'],
                $data['entry_time'],
                $data['clock_out'],
                $data['working_hours'],
                $data['fine'],
                $data['salary'],
                
            )
        );

        if (!$result) {
            throw new Exception("Error creating employee: " . pg_last_error(Connection::getConnection()));
        }
        return true;
    }

    public static function update($id, $data) {
        if (empty($data['name']) || empty($data['status']) || empty($data['date']) || empty($data['entry_time']) || empty($data['clock_out'])) {
            throw new Exception("All fields are required.");
        }

        $result = pg_query_params(Connection::getConnection(), (new Queries())->updatedKaryawan, array(
            $id,    
            $data['name'],
            $data['status'],
            $data['date'],
            $data['entry_time'],
            $data['clock_out'],
        ));

        if (!$result) {
            throw new Exception("Error updating employee: " . pg_last_error(Connection::getConnection()));
        }
        return true;
    }

    public static function delete($id) {
        $result = pg_query_params(Connection::getConnection(), (new Queries)->deletedKaryawan, array($id));
        if (!$result) {
            throw new Exception("Error deleting employee: " . pg_last_error(Connection::getConnection()));
        }
        return true;
    }

}
?>
