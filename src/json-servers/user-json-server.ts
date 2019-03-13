import * as http from 'http';
import { Request, Response } from 'express';
import UserPersonalData from '../interfaces/UserPersonalData';
import Vacation from '../interfaces/Vacation';

const USERS = require('../mocks/Users.json');
const USERS_PERSONAL_DATA = require('../mocks/UsersPersonalData.json');
const VACATIONS = require('../mocks/Vacations.json');

const DEFAULT_PORT = 8000;

const server: http.Server = http.createServer();
const port: number | string = process.env.PORT || DEFAULT_PORT;

function getUsers() {
  return USERS.Users.map((item) => {
    const personalData: UserPersonalData = USERS_PERSONAL_DATA.UsersPersonalData.find((data) => {
      return item.personalData_id === data.id;
    });
    const vacations: Vacation[] = VACATIONS.Vacations.filter((vacation) => {
      return item.vacations_id === vacation.id;
    });
    return Object.assign(item, { personalData, vacations });
  });
}

server.on('request', (req: Request, res: Response) => {
  const users = getUsers();
  res.writeHead(200, {
    'Content-Type': 'text/json',
  });
  res.end(JSON.stringify(users));
}).on('error', (error: NodeJS.ErrnoException) => {
  switch (error.code) {
    case 'EACCES':
      console.error(`${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.listen(port);
