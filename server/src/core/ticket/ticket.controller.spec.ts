import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { mockCreateTicket, mockTicket } from '@test/mocks/data/ticket';
import { MockTicketService } from '@test/mocks/modules/ticketService';

import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

describe('TicketController', () => {
  let ticketService: TicketService;
  let ticketController: TicketController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [
        {
          provide: TicketService,
          useValue: new MockTicketService(),
        },
      ],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
    ticketController = module.get<TicketController>(TicketController);
  });

  it('should return created ticket', async () => {
    const mockData = { ...mockCreateTicket };
    const mockResult = { ...mockTicket };

    const json = jest.fn();

    const response: any = {
      status: jest.fn(() => ({ json })),
    };

    ticketService.create = jest.fn().mockResolvedValueOnce(mockResult);

    await ticketController.create(mockData, response);

    expect(response.status).toHaveBeenCalledWith(HttpStatus.CREATED);
    expect(json).toHaveBeenCalledWith(mockResult);
  });

  it('should return tickets by event id', async () => {
    const mockQuery = { eventId: 1 };
    const mockResult = [{ ...mockTicket }];

    const json = jest.fn();

    const response: any = {
      status: jest.fn(() => ({ json })),
    };

    ticketService.findAll = jest.fn().mockResolvedValueOnce(mockResult);

    await ticketController.getAll(mockQuery, response);

    expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(json).toHaveBeenCalledWith(mockResult);
  });
});
