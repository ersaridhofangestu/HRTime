<!-- method POST =>  Created Data -->
Risandi -> {
    employee/employeeController -> {
        createEmployee() -> {
            employeeModule -> {
                create() -> {
                    db() -> {
                        ceatedGajiKaryawan -> connection
                    }
                }
            }
            employeeView -> {
                response(), sucess(), error()
            }
        }
    }
}

<!-- method GET =>  Read Datas -->
Yoseph -> {
    employee/employeeController -> {
        getEmployees() -> {
            employeeModule -> {
                getAll() -> {
                    db -> {
                        getAllGajiKaryawan() -> connection()
                    }
                }
            }
            employeeView -> {
                response(), sucess(), error()
            }
        }
        ggetEmployeeById(id) -> {
            employeeModule -> {
                getAllById(id) -> {
                    db -> {
                        getKaryawanById() -> connection
                    }
                }
            }
            employeeView -> {
                response(), sucess(), error()
            }
        }
    }
}

<!-- method PUT =>  Updated Data -->
Kasih -> {
    employee/employeeController -> {
        updateEmployee(id, data) -> {
            employeeModule -> {
                update(id, data) -> {
                    db() -> {
                        updatedKaryawan -> connection
                    }
                }
            }
            employeeView -> {
                response(), sucess(), error()
            }
        }
    }
}

<!-- method DELETE =>  Deleted Data -->
Rendy -> {
    employee/employeeController -> {
        deleteEmployee(id) -> {
            employeeModule -> {
                delete(id) -> {
                    db() -> {
                        deletedKaryawan -> connection
                    }
                }
            }
            employeeView -> {
                response(), sucess(), error()
            }
        }
    }
}

