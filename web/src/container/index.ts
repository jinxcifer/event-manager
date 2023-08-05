import { Container } from 'inversify';

import { config } from '@app/config';

import { TYPES } from './types';

import { diContainer as prodContainer } from './config';
import { diContainer as testContainer } from './config.testing';

let diContainer: Container;

switch (config.ENV) {
  case 'testing':
    diContainer = testContainer;
    break;
  default:
    diContainer = prodContainer;
}

export { diContainer, TYPES };
