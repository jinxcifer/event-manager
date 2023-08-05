import { ITicketRepository } from '@app/core/ticket';

export class MockTicketRepository implements ITicketRepository {
  getAll = jest.fn();
  create = jest.fn();
}
