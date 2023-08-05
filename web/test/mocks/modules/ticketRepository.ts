import { injectable } from 'inversify';

import { ITicketRepository } from '@app/outbound/repositories';

@injectable()
export class MockTicketRepository implements ITicketRepository {
  getByEvent = jest.fn();
  create = jest.fn();
}
