import { Router } from 'express';
import Employee from '../repositoreDataBase/models/employee-model';
import { getAll } from '../controller/employee-controller';



const router = Router();
router.get('/', async (_, res) => {
  res.status(200).json({message:"seja bem vindo"})
});
router.get('/api/employees', getAll);

router.get('/employee', async (_, res) => {
  try {
    const employeeData:any = {
      name:"marcelo",
      role: "Contador",
      department: "Finacneiro",
      date: new Date(),
    };
    const newEmployee = new Employee(employeeData);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error:any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;  