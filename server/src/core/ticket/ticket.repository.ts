import { DatabaseError, ERROR_CODE } from '@app/error';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ticket } from './ticket.entity';
import {
  CreateTicket,
  ITicketRepository,
  FindTicketsOptions,
} from './ticket.interface';

@Injectable()
export class TicketRepository implements ITicketRepository {
  constructor(
    @InjectRepository(Ticket)
    private repo: Repository<Ticket>,
  ) {}

  getAll(opt: FindTicketsOptions): Promise<Ticket[]> {
    try {
      return this.repo.find({ where: { event: { id: opt.eventId } } });
    } catch (err) {
      throw new DatabaseError({
        code: ERROR_CODE.BDB1002,
        message: 'could not find tickets',
        cause: err,
      });
    }
  }

  async create(ticket: CreateTicket): Promise<Ticket> {
    try {
      const newTicket = this.repo.create(ticket);

      await this.repo.insert(newTicket);

      return newTicket;
    } catch (err) {
      throw new DatabaseError({
        code: ERROR_CODE.BDB1003,
        message: 'could not create ticket',
        info: { ticket },
        cause: err,
      });
    }
  }
}
