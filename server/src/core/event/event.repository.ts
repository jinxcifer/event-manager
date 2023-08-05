import { DatabaseError, EntityNotFoundError, ERROR_CODE } from '@app/error';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from './event.entity';
import { CreateEvent, IEventRepository } from './event.interface';

@Injectable()
export class EventRepository implements IEventRepository {
  constructor(
    @InjectRepository(Event)
    private repo: Repository<Event>,
  ) {}

  get(id: number): Promise<Event | null> {
    let event;

    try {
      event = this.repo.findOneBy({ id });
    } catch (err) {
      throw new DatabaseError({
        code: ERROR_CODE.BDB1000,
        message: 'could not find event by id',
        info: { id },
        cause: err,
      });
    }

    if (!event)
      throw new EntityNotFoundError({
        code: ERROR_CODE.BDB1001,
        message: 'event with id does not exist',
        info: { id },
      });

    return event;
  }

  getAll(): Promise<Event[]> {
    try {
      return this.repo.find();
    } catch (err) {
      throw new DatabaseError({
        code: ERROR_CODE.BDB1002,
        message: 'could not find events',
        cause: err,
      });
    }
  }

  async create(event: CreateEvent): Promise<Event> {
    try {
      const newEvent = this.repo.create(event);

      await this.repo.insert(newEvent);

      return newEvent;
    } catch (err) {
      throw new DatabaseError({
        code: ERROR_CODE.BDB1003,
        message: 'could not create event',
        info: { event },
        cause: err,
      });
    }
  }
}
