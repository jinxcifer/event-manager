export interface Ticket {
  id: number;
  barcode: string;
  firstName: string;
  lastName: string;
  eventId: number;
}

export interface CreateTicket {
  barcode: string;
  firstName: string;
  lastName: string;
  eventId: number;
}

export interface FindTicketsOptions {
  eventId: number;
}

export interface ITicketRepository {
  getAll(opt?: FindTicketsOptions): Promise<Ticket[]>;
  create(event: CreateTicket): Promise<Ticket>;
}
