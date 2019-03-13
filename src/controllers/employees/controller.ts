import { NextFunction, Request, Response, Router } from 'express';
import * as request from 'request-promise';

export default class EmployeesController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  private async getEmployees(req: Request, res: Response, next: NextFunction) {
    let users =  await request('http://localhost:8000');
    let departments = await request('http://localhost:7000');
    users = JSON.parse(users);
    departments = JSON.parse(departments);
    const employees = users.map((user) => {
      const department = departments.find(item => item.id === user.department_id);
      return Object.assign(user, { department });
    });
    res.status(200).end(JSON.stringify(employees));
  }

  private initRoutes(): void {
    this.router.get('/', this.getEmployees.bind(this));
  }

}
