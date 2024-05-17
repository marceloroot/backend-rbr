import { EmployeeRepository } from "../../../domain/repository/employee-repository";
import { EmployeesDTOList } from "./DTO/employees-dto-list";

export class ListEmployeesUseCase {
  constructor(
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(): Promise<EmployeesDTOList[]> {
    const employeesListRepository = await this.employeeRepository.findAll();
    if (!employeesListRepository) return [];
    const employeesDTO:EmployeesDTOList[] = []
    for (const employee of employeesListRepository) {
      const employeDTO: EmployeesDTOList = {
        id: employee.id,
        name:employee.name,
        date:employee.date,
        department:employee.department,
        role:employee.role,
      };
      
      employeesDTO.push(employeDTO);
    }
    return employeesDTO.length > 0 ? employeesDTO : [];
  }
}
