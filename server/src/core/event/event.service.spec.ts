import { Test } from '@nestjs/testing';

import { MockEventRepository } from '@test/mocks/modules/eventRepository';

import { mockEvent, mockCreateEvent } from '@test/mocks/data/event';

import { EventRepository } from './event.repository';
import { EventService } from './event.service';

describe('EventService', () => {
  let eventService: EventService;
  let eventRepository: EventRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        EventService,
        {
          provide: EventRepository,
          useValue: new MockEventRepository(),
        },
      ],
    }).compile();

    eventService = moduleRef.get<EventService>(EventService);
    eventRepository = moduleRef.get<EventRepository>(EventRepository);
  });

  it('should create the event', async () => {
    const mockData = { ...mockCreateEvent };

    await eventService.create(mockData);

    expect(eventRepository.create).toHaveBeenCalledWith(mockData);
  });

  it('should return the created event', async () => {
    const mockData = { ...mockCreateEvent };
    const mockResult = { ...mockEvent };

    eventRepository.create = jest.fn().mockResolvedValueOnce(mockResult);

    await expect(eventService.create(mockData)).resolves.toStrictEqual(
      mockResult,
    );
  });

  it('should find the events', async () => {
    await eventService.findAll();

    expect(eventRepository.getAll).toHaveBeenCalled();
  });

  it('should return the found events', async () => {
    const mockData = [{ ...mockEvent }];

    eventRepository.getAll = jest.fn().mockResolvedValueOnce(mockData);

    await expect(eventService.findAll()).resolves.toStrictEqual(mockData);
  });

  it('should find the event by id', async () => {
    const id = 1;

    await eventService.find(id);

    expect(eventRepository.get).toHaveBeenCalledWith(id);
  });

  it('should return the found event', async () => {
    const mockData = { ...mockEvent };

    eventRepository.get = jest.fn().mockResolvedValueOnce(mockData);

    await expect(eventService.find(mockData.id)).resolves.toStrictEqual(
      mockData,
    );
  });
});
