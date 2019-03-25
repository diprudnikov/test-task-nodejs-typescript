export default interface UserPersonalData {
  id: number;
  dob: Date;
  address: string;
  mobilePhone: string;
  personalEmail: string;
  familyStatus: string;
  children: string;
  emergencyContact: string;
  education: string;
  languages: string;
  drivingLicence_id?: number;
}
