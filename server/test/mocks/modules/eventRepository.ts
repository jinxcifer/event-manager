import { IEventRepository } from '@app/core/event';

export class MockEventRepository implements IEventRepository {
  get = jest.fn();
  getAll = jest.fn();
  create = jest.fn();
}
