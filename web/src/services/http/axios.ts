import axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';

import { config } from '@app/config';

import { IHttpClient, HttpOptions } from './types';

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.BACKEND_URL,
    });
  }

  async get(url: string, options?: HttpOptions) {
    const response = await this.axiosInstance.get(url, options);

    return response.data;
  }

  async post(url: string, options?: HttpOptions) {
    const response = await this.axiosInstance.post(url, options?.data, options);

    return response.data;
  }
}
