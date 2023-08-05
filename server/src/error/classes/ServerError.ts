import { HttpStatus } from '@nestjs/common';

import { BaseError, IErrorOptions } from './BaseError';

export class ServerError extends BaseError {
  constructor(options: IErrorOptions) {
    super({
      ...options,
      name: 'ServerError',
    });

    this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
