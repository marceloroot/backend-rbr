import { Employee } from "../entity/employee";


export interface EmployeeRepository {
  findAll(): Promise<Employee[]>;
  findById(id: string): Promise<Employee>;
}
