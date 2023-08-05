import { Test } from '@nestjs/testing';

import { CryptoService } from '@app/services/crypto';

import { MockTicketRepository } from '@test/mocks/modules/ticketRepository';
import { MockCryptoService } from '@test/mocks/modules/cryptoService';

import { mockTicket, mockCreateTicket } from '@test/mocks/data/ticket';

import { TicketRepository } from './ticket.repository';
import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let ticketService: TicketService;
  let ticketRepository: TicketRepository;
  let cryptoService: CryptoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        TicketService,
        {
          provide: TicketRepository,
          useValue: new MockTicketRepository(),
        },
        {
          provide: CryptoService,
          useValue: new MockCryptoService(),
        },
      ],
    }).compile();

    ticketService = moduleRef.get<TicketService>(TicketService);
    ticketRepository = moduleRef.get<TicketRepository>(TicketRepository);
    cryptoService = moduleRef.get<CryptoService>(CryptoService);
  });

  it('should create the ticket with bardcode', async () => {
    const mockData = { ...mockCreateTicket };
    const barcode = 'aaa';

    cryptoService.generateRandomString = jest.fn().mockReturnValueOnce(barcode);

    await ticketService.create(mockData);

    expect(ticketRepository.create).toHaveBeenCalledWith({
      ...mockData,
      barcode,
    });
  });

  it('should return the created ticket', async () => {
    const mockData = { ...mockCreateTicket };
    const barcode = 'aaa';

    const createdTicket = {
      ...mockData,
      barcode,
    };

    ticketRepository.create = jest.fn().mockResolvedValueOnce(createdTicket);
    cryptoService.generateRandomString = jest.fn().mockReturnValueOnce(barcode);

    await expect(ticketService.create(mockData)).resolves.toStrictEqual(
      createdTicket,
    );
  });

  it('should find the tickets by eventId', async () => {
    const options = {
      eventId: 2,
    };

    await ticketService.findAll(options);

    expect(ticketRepository.getAll).toHaveBeenCalledWith(options);
  });

  it('should return the found events', async () => {
    const options = {
      eventId: 2,
    };

    const mockTickets = [{ ...mockTicket }];

    ticketRepository.getAll = jest.fn().mockResolvedValueOnce(mockTickets);

    await expect(ticketService.findAll(options)).resolves.toStrictEqual(
      mockTickets,
    );
  });
});
