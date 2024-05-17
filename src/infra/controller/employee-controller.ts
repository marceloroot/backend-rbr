import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import { ProductUseCaseFactory } from "../facotry/abstract-factory/list-employees-abstract-factory";


export const getAll = async (_: Request, res: Response): Promise<void> =>  {
    try{
      const listEmployeesFactory = ProductUseCaseFactory.createListEmpolyeeAbstractFactory();
      const employees = await listEmployeesFactory.execute();
      res.status(StatusCodes.OK).json(employees);
      } catch (error:any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          errors: error.message
        });
      }
   
};

export const create = async (req: Request, res: Response):Promise<void> =>{
    try{

    }
    catch(error:any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          errors: error.message
        });
      }
}