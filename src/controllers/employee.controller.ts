import { NextFunction, Request, Response, Router } from 'express';
import DepartmentRepository from '../repositories/department.repository';
import UserRepository from '../repositories/user.repository';
import EmployeeHelpers from '../helpers/employee.helpers';
import Department from '../interfaces/Department';
import Employee from '../interfaces/Employee';
import User from '../interfaces/User';

export default class EmployeeController {

  public router: Router;
  private departmentRepository: DepartmentRepository;
  private userRepository: UserRepository;

  constructor(departmentRepository: DepartmentRepository, userRepository: UserRepository) {
    this.router = Router();
    this.initRoutes();
    this.departmentRepository = departmentRepository;
    this.userRepository = userRepository;
  }

  private async getEmployees(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    try {
      const users: User[] = await this.userRepository.getUsers();
      const departments: Department[] = await this.departmentRepository.getDepartments();
      const employees: Employee[] = EmployeeHelpers.createEmployees(users, departments);
      res.status(200).end(JSON.stringify(employees));
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }

  private initRoutes(): void {
    this.router.get('/', this.getEmployees.bind(this));
  }

}
