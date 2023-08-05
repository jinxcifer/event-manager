import { injectable } from 'inversify';

import { EventMapper } from '@app/outbound/mapper';

@injectable()
export class MockEventMapper implements EventMapper {
  toDomain = jest.fn();
  fromDomain = jest.fn();
}
