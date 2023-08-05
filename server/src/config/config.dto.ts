import { IsEnum, IsNumber, IsString } from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'testing',
}

export class Config {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  BACKEND_PORT: number;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;

  @IsString()
  DATABASE_HOST: string;

  @IsNumber()
  DATABASE_PORT: number;

  @IsString()
  DATABASE_NAME: string;
}
