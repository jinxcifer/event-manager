import {
  HttpStatus,
  Controller,
  Get,
  Post,
  Body,
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateTicketDto } from './dto/create-ticket.dto';
import { GetTicketsQueryDto } from './dto/get-tickets-query-dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(
    @Body() createTicketDto: CreateTicketDto,
    @Res() res: Response,
  ): Promise<void> {
    const newTicket = await this.ticketService.create(createTicketDto);

    res.status(HttpStatus.CREATED).json(newTicket);
  }

  @Get()
  async getAll(
    @Query() query: GetTicketsQueryDto,
    @Res() res: Response,
  ): Promise<void> {
    const tickets = await this.ticketService.findAll(query);

    res.status(HttpStatus.OK).json(tickets);
  }
}
