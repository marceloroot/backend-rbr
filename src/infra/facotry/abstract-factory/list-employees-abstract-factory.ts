import { ListEmployeesUseCase } from "../../../application/useCase/employee/list-employees-use-case";
import { EmployeeRepositoryDataBase } from "../../repositoreDataBase/repositore-data-base";


export class ProductUseCaseFactory {
  
  static createListEmpolyeeAbstractFactory(): ListEmployeesUseCase {
    const employeeRepositoreDataBase = new EmployeeRepositoryDataBase();
    return new ListEmployeesUseCase(employeeRepositoreDataBase);
  }

 
}
