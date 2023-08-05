import { inject, injectable } from 'inversify';

import { Ticket } from '@app/types';

import { ITicketMapper } from '@app/outbound/mapper';

import { TYPES } from '@app/container/types';

import { IHttpClient } from '@app/services/http';

import { CreateTicketType, ITicketRepository } from './types';

@injectable()
export class TicketRepository implements ITicketRepository {
  private ticketMapper: ITicketMapper;
  private httpClient: IHttpClient;

  constructor(
    @inject(TYPES.TicketMapper) ticketMapper: ITicketMapper,
    @inject(TYPES.HttpClient) httpClient: IHttpClient,
  ) {
    this.ticketMapper = ticketMapper;
    this.httpClient = httpClient;
  }

  async getByEvent(eventId: number): Promise<Ticket[]> {
    const tickets = await this.httpClient.get('/ticket', {
      params: { eventId },
    });

    return tickets.map(this.ticketMapper.toDomain);
  }

  async create(ticket: CreateTicketType): Promise<Ticket> {
    const createdTicket = await this.httpClient.post('/ticket', {
      data: ticket,
    });

    return this.ticketMapper.toDomain(createdTicket);
  }
}
