import { injectable } from 'inversify';

import { TicketDTO } from '@app/outbound/dto';

import { Ticket } from '@app/types';

import { ITicketMapper } from './types';

@injectable()
export class TicketMapper implements ITicketMapper {
  toDomain(dto: TicketDTO): Ticket {
    return {
      id: dto.id,
      barcode: dto.barcode,
      firstName: dto.firstName,
      lastName: dto.lastName,
      eventId: dto.eventId,
    };
  }

  fromDomain(domain: Ticket): TicketDTO {
    return {
      id: domain.id,
      barcode: domain.barcode,
      firstName: domain.firstName,
      lastName: domain.lastName,
      eventId: domain.eventId,
    };
  }
}
