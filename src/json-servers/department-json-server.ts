import * as http from 'http';
import { Request, Response } from 'express';
import Office from '../interfaces/Office';

const DEPARTMENTS = require('../mocks/Departments.json');
const OFFICES = require('../mocks/Offices.json');

const DEFAULT_PORT = 7000;

const server: http.Server = http.createServer();
const port: number | string = process.env.PORT || DEFAULT_PORT;

function getDepartments() {
  return DEPARTMENTS.Departments.map((item) => {
    const office: Office = OFFICES.Offices.find(office => office.id === item.office_id);
    return Object.assign(item, { office });
  });
}

server.on('request', (req: Request, res: Response) => {
  const departments = getDepartments();
  res.writeHead(200, {
    'Content-Type': 'text/json',
  });
  res.end(JSON.stringify(departments));
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
