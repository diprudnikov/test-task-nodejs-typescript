import Office from './Office';
import User from './User';

export default interface Department {
  id: number;
  name: string;
  headOfDepartment: User;
  office: Office;
}
