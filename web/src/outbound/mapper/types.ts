import { EventDTO, TicketDTO } from '@app/outbound/dto';

import { Event, Ticket } from '@app/types';

export interface IDataMapper<T, D> {
  toDomain(dto: D): T;
  fromDomain(domain: T): D;
}

export interface IEventMapper extends IDataMapper<Event, EventDTO> {}

export interface ITicketMapper extends IDataMapper<Ticket, TicketDTO> {}
