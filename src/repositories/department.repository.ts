import axios, { AxiosRequestConfig } from 'axios';
import Department from '../interfaces/Department';

export default class DepartmentRepository {
  private readonly config: AxiosRequestConfig;
  private cache: Department[];

  constructor() {
    this.cache = null;
    this.config = {
      url: 'http://localhost:7000',
      method: 'get',
      responseType: 'json',
      timeout: 5000,
    };
  }

  public getDepartments(): Promise<Department[]> {
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
