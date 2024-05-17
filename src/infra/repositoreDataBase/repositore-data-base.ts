import { Employee } from "../../domain/entity/employee";
import { EmployeeRepository } from "../../domain/repository/employee-repository";
import EmployeeModel, { EmployeeInterface } from "./models/employee-model";

export class EmployeeRepositoryDataBase implements EmployeeRepository {
  constructor() {}
  async findAll(): Promise<Employee[]> {
    const employeesModel = await EmployeeModel.find();
    const employees: Employee[] = employeesModel.map((data:EmployeeInterface) => {
      return new Employee({
        id: data.id,
        name:data.name,
        date:data.date,
        department:data.department,
        role:data.role
      });
    });
    return employees;
  }
  findById(id: string): Promise<Employee> {
    console.log(id)
    throw new Error('not implemented');
  }
}

