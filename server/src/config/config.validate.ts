import { ERROR_CODE, ValidationError } from '@app/error';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { Config } from './config.dto';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(Config, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    forbidUnknownValues: true,
  });

  if (errors.length > 0) {
    const fields = errors.map((error) => ({
      key: error.property,
      value: error.value,
    }));

    throw new ValidationError({
      code: ERROR_CODE.BVA1001,
      message: 'config could not be validated',
      info: { fields },
    });
  }
  return validatedConfig;
}
