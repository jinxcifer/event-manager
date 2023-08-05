import { Injectable } from '@nestjs/common';

import { EventRepository } from './event.repository';
import { CreateEvent, Event } from './event.interface';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  create(event: CreateEvent): Promise<Event> {
    return this.eventRepository.create(event);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.getAll();
  }

  find(id: number): Promise<Event> {
    return this.eventRepository.get(id);
  }
}
