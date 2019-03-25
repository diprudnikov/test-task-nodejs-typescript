import Office from './Office';

export default interface Department {
  id: number;
  name: string;
  headOfDepartment_id: number;
  office_id: number;
  office: Office;
}
