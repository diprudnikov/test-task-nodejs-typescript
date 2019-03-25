import axios, { AxiosRequestConfig } from 'axios';
import User from '../interfaces/User';

export default class UserRepository {
  private readonly config: AxiosRequestConfig;
  private cache: User[];

  constructor() {
    this.cache = null;
    this.config = {
      url: 'http://localhost:8000',
      method: 'get',
      responseType: 'json',
      timeout: 5000,
    };
  }

  public getUsers(): Promise<User[]> {
    if (this.cache) {
      return Promise.resolve(this.cache);
    }
    return axios(this.config)
          .then((resp) => {
            this.cache = resp.data;
            return this.cache;
          });
  }
}
