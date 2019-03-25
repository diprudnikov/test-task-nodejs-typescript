import UserPersonalData from './UserPersonalData';
import Vacation from './Vacation';
import Department from './Department';

export default interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  employmentStatus: string;
  department_id: number;
  department: Department;
  jobFunction: string;
  photo: string;
  phoneNumber: string;
  skype: string;
  email: string;
  linkedin: string;
  personalData_id?: number;
  vacations_id?: number;
  personalData: UserPersonalData;
  vacations: Vacation[];
}
