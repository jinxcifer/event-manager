import { Event, Ticket } from '@app/types';

export type CreateEventType = Omit<Event, 'id'>;

export interface IEventRepository {
  get(id: number): Promise<Event>;
  getAll(): Promise<Event[]>;
  create(user: CreateEventType): Promise<Event>;
}

export type CreateTicketType = Omit<Ticket, 'id' | 'barcode'>;

export interface ITicketRepository {
  getByEvent(eventId: number): Promise<Ticket[]>;
  create(user: CreateTicketType): Promise<Ticket>;
}
