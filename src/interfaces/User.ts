import Department from './Department';
import UserPersonalData from './UserPersonalData';
import Vacation from './Vacation';

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  employmentStatus: string;
  department: Department;
  jobFunction: string;
  photo: string;
  phoneNumber: string;
  skype: string;
  email: string;
  linkedin: string;
  personalData?: UserPersonalData;
  vacations?: Vacation[];
}
