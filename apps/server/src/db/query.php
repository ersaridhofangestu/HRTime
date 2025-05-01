<?php
class Queries {
    public $createdGajiKaryawan = "INSERT INTO employee_salary(
                                        name, 
                                        status, 
                                        date, 
                                        entry_time, 
                                        clock_out
                                    )   
                                    VALUES (
                                       $1, 
                                       $2, 
                                       $3, 
                                       $4, 
                                       $5
                                       )";
    
    public $updatedKaryawan = "UPDATE employee_salary 
                                    SET 
                                        name = $2, 
                                        status = $3, 
                                        date = $4, 
                                        entry_time = $5, 
                                        clock_out = $6
                                    WHERE 
                                        id =  $1";  

    public $deletedKaryawan = "DELETE FROM employee_salary WHERE id =  $1"; 

    public $getAllGajiKaryawan = "SELECT * FROM employee_salary";

    public $getKaryawanById = "SELECT * FROM employee_salary WHERE id =  $1";
}
