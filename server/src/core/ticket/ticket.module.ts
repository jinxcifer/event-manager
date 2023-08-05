import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CryptoModule } from '@app/services/crypto';

import { TicketController } from './ticket.controller';
import { Ticket } from './ticket.entity';
import { TicketRepository } from './ticket.repository';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), CryptoModule],
  controllers: [TicketController],
  providers: [TicketService, TicketRepository],
})
export class TicketModule {}
