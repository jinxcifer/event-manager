import { injectable } from 'inversify';

import { EventDTO } from '@app/outbound/dto';

import { Event } from '@app/types';

import { IEventMapper } from './types';

@injectable()
export class EventMapper implements IEventMapper {
  toDomain(dto: EventDTO): Event {
    return {
      id: dto.id,
      city: dto.city,
      title: dto.title,
      date: new Date(dto.date),
    };
  }

  fromDomain(domain: Event): EventDTO {
    return {
      id: domain.id,
      city: domain.city,
      title: domain.title,
      date: domain.date.toString(),
    };
  }
}
