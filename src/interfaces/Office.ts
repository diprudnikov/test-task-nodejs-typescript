import User from './User';
import Location from './Location';

export default interface Office {
  id: number;
  name: string;
  headOfOffice: User;
  location: Location;
}
