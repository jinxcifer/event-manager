import {
  HttpStatus,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(
    @Body() createEventDto: CreateEventDto,
    @Res() res: Response,
  ): Promise<void> {
    const newEvent = await this.eventService.create(createEventDto);

    res.status(HttpStatus.CREATED).json(newEvent);
  }

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const events = await this.eventService.findAll();

    res.status(HttpStatus.OK).json(events);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const event = await this.eventService.find(id);

    res.status(HttpStatus.OK).json(event);
  }
}
