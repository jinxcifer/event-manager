import { HttpStatus } from '@nestjs/common';

import { BaseError, IErrorOptions } from './BaseError';

export type ValidationFieldType = {
  key: string | undefined;
  value: any;
};

export type ValidationInfoType = {
  fields: ValidationFieldType[];
};

export class ValidationError extends BaseError<ValidationInfoType> {
  constructor(options: IErrorOptions<ValidationInfoType>) {
    super({
      ...options,
      name: 'ValidationError',
    });

    this.httpStatus = HttpStatus.BAD_REQUEST;
  }
}
