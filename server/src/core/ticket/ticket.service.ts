import { Injectable } from '@nestjs/common';

import { CryptoService } from '@app/services/crypto';

import { TicketRepository } from './ticket.repository';
import { Ticket, FindTicketsOptions } from './ticket.interface';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly cryptoService: CryptoService,
  ) {}

  create(ticket: CreateTicketDto): Promise<Ticket> {
    const barcode = this.cryptoService.generateRandomString(8);

    return this.ticketRepository.create({
      ...ticket,
      barcode,
    });
  }

  findAll(opt: FindTicketsOptions): Promise<Ticket[]> {
    return this.ticketRepository.getAll(opt);
  }
}
