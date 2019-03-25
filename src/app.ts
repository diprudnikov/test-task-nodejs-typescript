import * as express from 'express';
import * as logger from 'morgan';
import EmployeeController from './controllers/employee.controller';
import DepartmentRepository from './repositories/department.repository';
import UserRepository from './repositories/user.repository';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.express.use(logger('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private setRoutes(): void {
    const departmentRepository = new DepartmentRepository();
    const userRepository = new UserRepository();
    const employeeController = new EmployeeController(departmentRepository, userRepository);
    this.express.use('/api/employees', employeeController.router);
  }
}

export default new App();
