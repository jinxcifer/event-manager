import { TYPES } from '@app/container';

import { ITicketMapper } from '@app/outbound/mapper';
import { IHttpClient } from '@app/services/http';

import { diContainer } from '@app/container';

import { mockCreateTicket, mockTicketDto } from '@test/mocks/data/ticket';

import { TicketRepository } from './TicketRepository';

describe('Outbound: TicketRepository', () => {
  it('should get tickets by event id', async () => {
    const ticketMapper = diContainer.get<ITicketMapper>(TYPES.TicketMapper);
    const httpClient = diContainer.get<IHttpClient>(TYPES.HttpClient);

    const mockId = 1234;
    const mockData = [{ ...mockTicketDto }];

    ticketMapper.toDomain = jest.fn().mockImplementationOnce((t) => t);
    httpClient.get = jest.fn().mockResolvedValueOnce(mockData);

    const repo = new TicketRepository(ticketMapper, httpClient);

    await expect(repo.getByEvent(mockId)).resolves.toStrictEqual(mockData);
  });

  it('should create a ticket', async () => {
    const ticketMapper = diContainer.get<ITicketMapper>(TYPES.TicketMapper);
    const httpClient = diContainer.get<IHttpClient>(TYPES.HttpClient);

    const mockData = { ...mockCreateTicket };
    const mockResult = { ...mockData, id: 1, barcode: 'en103inr' };

    ticketMapper.toDomain = jest.fn().mockReturnValueOnce(mockResult);

    const repo = new TicketRepository(ticketMapper, httpClient);

    await expect(repo.create(mockData)).resolves.toStrictEqual(mockResult);
  });
});
