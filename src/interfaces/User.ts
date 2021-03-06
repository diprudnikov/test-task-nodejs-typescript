import UserPersonalData from './UserPersonalData';
import Vacation from './Vacation';

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  employmentStatus: string;
  department_id: number;
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
