import { inject, injectable } from 'inversify';

import { Event } from '@app/types';

import { TYPES } from '@app/container/types';

import { IEventMapper } from '@app/outbound/mapper';

import { IHttpClient } from '@app/services/http';

import { CreateEventType, IEventRepository } from './types';

@injectable()
export class EventRepository implements IEventRepository {
  private eventMapper: IEventMapper;
  private httpClient: IHttpClient;

  constructor(
    @inject(TYPES.EventMapper) eventMapper: IEventMapper,
    @inject(TYPES.HttpClient) httpClient: IHttpClient,
  ) {
    this.eventMapper = eventMapper;
    this.httpClient = httpClient;
  }

  async get(id: number): Promise<Event> {
    const event = await this.httpClient.get(`/event/${id}`);

    return this.eventMapper.toDomain(event);
  }

  async getAll(): Promise<Event[]> {
    const events = await this.httpClient.get('/event');

    return events.map(this.eventMapper.toDomain);
  }

  async create(event: CreateEventType): Promise<Event> {
    const createdEvent = await this.httpClient.post('/event', { data: event });

    return this.eventMapper.toDomain(createdEvent);
  }
}
