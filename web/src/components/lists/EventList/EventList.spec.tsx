import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { mockEvent } from '@test/mocks/data/event';

import { EventList } from './EventList';

const setup = (override: any) => {
  const props = {
    events: [],
    onAddTicket: jest.fn(),
    ...override,
  };

  return {
    props,
    component: (
      <MemoryRouter>
        <EventList {...props} />
      </MemoryRouter>
    ),
  };
};

describe('Component: EventList', () => {
  it('should render events', () => {
    const events = [
      { ...mockEvent, title: 'Incubus' },
      { ...mockEvent, title: 'Boysetsfire' },
    ];

    const { component } = setup({
      events,
    });

    render(component);

    expect(screen.getByText('Incubus')).toBeInTheDocument();
    expect(screen.getByText('Boysetsfire')).toBeInTheDocument();
  });
});
