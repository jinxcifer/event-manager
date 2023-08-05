import { mockEvent, mockEventDto } from '@test/mocks/data/event';

import { EventMapper } from './EventMapper';

describe('Outbound: EventMapper', () => {
  it('should transform event to domain', () => {
    const mockData = { ...mockEventDto };
    const mockResult = { ...mockData, date: new Date(mockEventDto.date) };

    const mapper = new EventMapper();

    expect(mapper.toDomain(mockData)).toStrictEqual(mockResult);
  });

  it('should transform event from domain', () => {
    const mockData = { ...mockEvent };
    const mockResult = { ...mockData, date: mockData.date.toString() };

    const mapper = new EventMapper();

    expect(mapper.fromDomain(mockData)).toStrictEqual(mockResult);
  });
});
