import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { LoggingService } from 'src/services/logging';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggingService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log({
      message: 'http request',
      data: {
        method: req.method,
        url: req.originalUrl || req.url,
        ip: req.ip,
        version: `HTTP/${req.httpVersionMajor}.${req.httpVersionMinor}`,
      },
    });

    next();
  }
}
