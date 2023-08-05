export interface Event {
  id: number;
  title: string;
  date: Date;
  city: string;
  tickets: string[];
}

export interface CreateEvent {
  date: Date;
  title: string;
  city: string;
}

export interface IEventRepository {
  get(id: number): Promise<Event | null>;
  getAll(): Promise<Event[]>;
  create(event: CreateEvent): Promise<Event>;
}
