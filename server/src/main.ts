import { NestFactory } from '@nestjs/core';
import {
  ValidationPipe,
  ValidationError as NestValidationError,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ERROR_CODE, ValidationError } from '@app/error';

import { LoggingService } from './services/logging';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.enableCors({
    origin: [app.get(ConfigService).get('BACKEND_ORIGIN')],
  });

  app.useLogger(app.get(LoggingService));

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
      exceptionFactory: (errors: NestValidationError[]) => {
        const fields = errors.map((error) => ({
          key: error.property,
          value: error.value,
        }));

        return new ValidationError({
          code: ERROR_CODE.BVA1000,
          message: 'request body could not be validated',
          info: { fields },
        });
      },
    }),
  );

  await app.listen(app.get(ConfigService).get('BACKEND_PORT'), '0.0.0.0');
}
bootstrap();
