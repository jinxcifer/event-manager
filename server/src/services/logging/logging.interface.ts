import { BaseError } from '@app/error';

export interface LogData<T = any> {
  message: string;
  data?: T;
}

export interface ErrorData {
  message: string;
  data: BaseError;
}
