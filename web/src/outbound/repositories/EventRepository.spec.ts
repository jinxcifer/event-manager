import { TYPES } from '@app/container';

import { IEventMapper } from '@app/outbound/mapper';
import { IHttpClient } from '@app/services/http';

import { diContainer } from '@app/container';

import { mockCreateEvent, mockEventDto } from '@test/mocks/data/event';

import { EventRepository } from './EventRepository';

describe('Outbound: EventRepository', () => {
  it('should get a event by id', async () => {
    const eventMapper = diContainer.get<IEventMapper>(TYPES.EventMapper);
    const httpClient = diContainer.get<IHttpClient>(TYPES.HttpClient);

    const mockId = 1234;
    const mockData = { ...mockEventDto };

    eventMapper.toDomain = jest.fn().mockReturnValueOnce(mockData);

    const repo = new EventRepository(eventMapper, httpClient);

    await expect(repo.get(mockId)).resolves.toStrictEqual(mockData);
  });

  it('should get all events', async () => {
    const eventMapper = diContainer.get<IEventMapper>(TYPES.EventMapper);
    const httpClient = diContainer.get<IHttpClient>(TYPES.HttpClient);

    const mockData = [{ ...mockEventDto }];

    eventMapper.toDomain = jest.fn().mockImplementationOnce((e) => e);
    httpClient.get = jest.fn().mockResolvedValueOnce(mockData);

    const repo = new EventRepository(eventMapper, httpClient);

    await expect(repo.getAll()).resolves.toStrictEqual(mockData);
  });

  it('should create an event', async () => {
    const eventMapper = diContainer.get<IEventMapper>(TYPES.EventMapper);
    const httpClient = diContainer.get<IHttpClient>(TYPES.HttpClient);

    const mockData = { ...mockCreateEvent };
    const mockResult = { ...mockData, id: 1 };

    eventMapper.toDomain = jest.fn().mockReturnValueOnce(mockResult);

    const repo = new EventRepository(eventMapper, httpClient);

    await expect(repo.create(mockData)).resolves.toStrictEqual(mockResult);
  });
});
