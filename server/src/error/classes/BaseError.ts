import * as VError from 'verror';
import { HttpStatus } from '@nestjs/common';

import { ERROR_CODE } from '@app/error/code';

export interface IErrorOptions<
  I extends VError.Info = Record<string, unknown>,
> {
  code: ERROR_CODE;
  message: string;
  cause?: Error;
  info?: I;
}

export interface IBaseErrorOptions {
  name: string;
}

export abstract class BaseError<
  I extends VError.Info = Record<string, unknown>,
> extends VError.WError {
  static fullStack = VError.VError.fullStack;
  static info = VError.VError.info;
  static cause = VError.VError.cause;
  static findCauseByName = VError.VError.findCauseByName;
  static hasCauseWithName = VError.VError.hasCauseWithName;

  code: ERROR_CODE;
  httpStatus: number;

  constructor(options: IBaseErrorOptions & IErrorOptions<I>) {
    super(
      {
        cause: options.cause,
        info: options.info,
        name: options.name,
      },
      options.message,
    );

    this.code = options.code;
    this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
