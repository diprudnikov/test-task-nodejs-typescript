import Employee from '../interfaces/Employee';

export default class EmployeeHelpers {

  static createEmployees(users, departments): Employee[] {
    return users.map((user) => {
      const department = departments.find(item => item.id === user.department_id);
      return { ...user, department };
    });
  }
}
