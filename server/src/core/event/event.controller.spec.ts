import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { mockCreateEvent, mockEvent } from '@test/mocks/data/event';
import { MockEventService } from '@test/mocks/modules/eventService';

import { EventController } from './event.controller';
import { EventService } from './event.service';

describe('EventController', () => {
  let eventService: EventService;
  let eventController: EventController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [EventController],
      providers: [
        {
          provide: EventService,
          useValue: new MockEventService(),
        },
      ],
    }).compile();

    eventService = module.get<EventService>(EventService);
    eventController = module.get<EventController>(EventController);
  });

  it('should return created event', async () => {
    const mockData = { ...mockCreateEvent };
    const mockResult = { ...mockEvent };

    const json = jest.fn();

    const response: any = {
      status: jest.fn(() => ({ json })),
    };

    eventService.create = jest.fn().mockResolvedValueOnce(mockResult);

    await eventController.create(mockData, response);

    expect(response.status).toHaveBeenCalledWith(HttpStatus.CREATED);
    expect(json).toHaveBeenCalledWith(mockResult);
  });

  it('should return events', async () => {
    const mockResult = [{ ...mockEvent }];

    const json = jest.fn();

    const response: any = {
      status: jest.fn(() => ({ json })),
    };

    eventService.findAll = jest.fn().mockResolvedValueOnce(mockResult);

    await eventController.getAll(response);

    expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(json).toHaveBeenCalledWith(mockResult);
  });

  it('should return event by id', async () => {
    const mockParam = 1;
    const mockResult = { ...mockEvent };

    const json = jest.fn();

    const response: any = {
      status: jest.fn(() => ({ json })),
    };

    eventService.find = jest.fn().mockResolvedValueOnce(mockResult);

    await eventController.findOne(mockParam, response);

    expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(json).toHaveBeenCalledWith(mockResult);
  });
});
