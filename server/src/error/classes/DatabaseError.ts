import { HttpStatus } from '@nestjs/common';

import { BaseError, IErrorOptions } from './BaseError';

export class DatabaseError extends BaseError {
  constructor(options: IErrorOptions) {
    super({
      ...options,
      name: 'DatabaseError',
    });

    this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
