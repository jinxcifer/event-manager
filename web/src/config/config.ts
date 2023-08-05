import { ConfigType } from './types';

export const config: ConfigType = {
  ENV: process.env.NODE_ENV || 'development',
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3000',
};
