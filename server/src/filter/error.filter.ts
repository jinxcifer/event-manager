import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

import { LoggingService } from '@app/services/logging';

import { ERROR_CODE, BaseError, ServerError } from '@app/error';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggingService) {}

  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const error =
      exception instanceof BaseError
        ? exception
        : new ServerError({
            code: ERROR_CODE.BSE1000,
            message: 'unexpected error occurred',
            cause: exception,
          });

    this.logger.error({ message: 'error occurred', data: error });

    response.status(error.httpStatus).json({
      statusCode: error.httpStatus,
      message: error.message,
      code: error.code,
      error: error.name,
      info: BaseError.info(error),
      timestamp: new Date().toISOString(),
    });
  }
}
