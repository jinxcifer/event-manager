import { injectable } from 'inversify';

import { ITicketMapper } from '@app/outbound/mapper';

@injectable()
export class MockTicketMapper implements ITicketMapper {
  toDomain = jest.fn();
  fromDomain = jest.fn();
}
