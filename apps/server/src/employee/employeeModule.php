<?php
require_once(__DIR__ . '/../db/connection.php');
require(__DIR__ . '/../db/query.php');

class EmployeeModule {
    private $queries;
    private $connection;

    public function __construct() {
        $this->connection = new connection();
        if (!$this->connection->getConnection()) {
            throw new Exception("Database connection failed.");
        }
        $this->queries = new Queries();
    }

    public function getAll() {
        $result = pg_query($this->connection->getConnection(),  $this->queries->getAllGajiKaryawan);
        if (!$result) {
            throw new Exception("Error fetching all employees: " . pg_last_error($this->connection->getConnection()));
        }
        $data = pg_fetch_all($result);
        if (!$data) {
            throw new Exception("No employees found.");
        }
        return $data;
    }

    public function getById($id) {
        $result = pg_query_params($this->connection->getConnection(), $this->queries->getKaryawanById, array($id));
        if (!$result) {
            throw new Exception("Error fetching employee by ID: " . pg_last_error($this->connection->getConnection()));
        }
        return pg_fetch_assoc($result);
    }

    public function create($data) {
        // Validasi apakah semua kolom diisi
        if (empty($data['name']) || empty($data['status']) || empty($data['date']) || empty($data['entry_time']) || empty($data['clock_out'])) {
            throw new Exception("All fields are required.");
        }

        // Eksekusi query menggunakan pg_query_params
        $result = pg_query_params(
            $this->connection->getConnection(), 
            $this->queries->createdGajiKaryawan,
            array(
                $data['name'],
                $data['status'],
                $data['date'],
                $data['entry_time'],
                $data['clock_out']
            )
        );

        if (!$result) {
            throw new Exception("Error creating employee: " . pg_last_error($this->connection->getConnection()));
        }
        return true;
    }

    public function update($id, $data) {
        // Validasi apakah semua kolom diisi
        if (empty($data['name']) || empty($data['status']) || empty($data['date']) || empty($data['entry_time']) || empty($data['clock_out'])) {
            throw new Exception("All fields are required.");
        }

        $result = pg_query_params($this->connection->getConnection(), $this->queries->updatedKaryawan, array(
            $id,    
            $data['name'],
            $data['status'],
            $data['date'],
            $data['entry_time'],
            $data['clock_out']
        ));

        if (!$result) {
            throw new Exception("Error updating employee: " . pg_last_error($this->connection->getConnection()));
        }
        return true;
    }

    public function delete($id) {
        $result = pg_query_params($this->connection->getConnection(), $this->queries->deletedKaryawan, array($id));
        if (!$result) {
            throw new Exception("Error deleting employee: " . pg_last_error($this->connection->getConnection()));
        }
        return true;
    }

    // Destructor untuk menutup koneksi database
    public function __destruct() {
        $this->connection->closeConnection();
    }
}
?>
