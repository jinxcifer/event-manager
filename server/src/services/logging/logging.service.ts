import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

import { BaseError } from '@app/error';

import { ConfigService } from '@nestjs/config';

import { LogData, ErrorData } from './logging.interface';

const { config, format, transports } = winston;

@Injectable()
export class LoggingService implements LoggerService {
  private logger: winston.Logger;

  constructor(private configService: ConfigService) {
    this.logger = winston.createLogger({
      format: format.combine(format.timestamp(), format.json()),
      level: 'debug',
      levels: config.syslog.levels,
      transports: [
        new transports.Console({
          level:
            this.configService.get('NODE_ENV') === 'production'
              ? 'info'
              : 'debug',
        }),
      ],
    });
  }

  log(log: LogData) {
    this.logger.log('info', log);
  }

  warn(log: LogData) {
    this.logger.log('warn', log);
  }

  error(log: ErrorData) {
    this.logger.log('error', {
      ...log,
      data: {
        message: log.data.message,
        code: log.data.code,
        info: BaseError.info(log.data),
        stack: BaseError.fullStack(log.data),
      },
    });
  }

  debug(log: LogData) {
    this.logger.log('debug', log);
  }
}
