import { mockTicket, mockTicketDto } from '@test/mocks/data/ticket';

import { TicketMapper } from './TicketMapper';

describe('Outbound: TicketMapper', () => {
  it('should transform ticket to domain', () => {
    const mockData = { ...mockTicketDto };

    const mapper = new TicketMapper();

    expect(mapper.toDomain(mockData)).toStrictEqual(mockData);
  });

  it('should transform ticket from domain', () => {
    const mockData = { ...mockTicket };

    const mapper = new TicketMapper();

    expect(mapper.fromDomain(mockData)).toStrictEqual(mockData);
  });
});
