import * as express from 'express';
import * as logger from 'morgan';
import EmployeesController from './controllers/employees';

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
    this.express.use('/api/employees', new EmployeesController().router);
  }
}

export default new App();
