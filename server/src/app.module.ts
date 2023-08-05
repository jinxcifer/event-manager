import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { validate } from '@app/config';

import { EventModule } from '@app/core/event';
import { Event } from '@app/core/event/event.entity';
import { TicketModule } from '@app/core/ticket';
import { Ticket } from '@app/core/ticket/ticket.entity';

import { LoggingModule } from '@app/services/logging';

import { AllExceptionsFilter } from '@app/filter';

import { LoggerMiddleware } from '@app/middleware';

@Module({
  imports: [
    LoggingModule,
    EventModule,
    TicketModule,
    ConfigModule.forRoot({
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Event, Ticket],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
