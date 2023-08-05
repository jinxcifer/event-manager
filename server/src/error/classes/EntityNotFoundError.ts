import { HttpStatus } from '@nestjs/common';

import { BaseError, IErrorOptions } from './BaseError';

export type EntityNotFoundInfoType = {
  id: number;
};

export class EntityNotFoundError extends BaseError<EntityNotFoundInfoType> {
  constructor(options: IErrorOptions<EntityNotFoundInfoType>) {
    super({
      ...options,
      name: 'EntityNotFoundError',
    });

    this.httpStatus = HttpStatus.NOT_FOUND;
  }
}
