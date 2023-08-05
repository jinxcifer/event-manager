import { injectable } from 'inversify';

import { IEventRepository } from '@app/outbound/repositories';

@injectable()
export class MockEventRepository implements IEventRepository {
  get = jest.fn();
  getAll = jest.fn();
  create = jest.fn();
}
