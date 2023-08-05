import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { mockTicket } from '@test/mocks/data/ticket';

import { TicketItem } from './TicketItem';

const setup = (override: any) => {
  const props = {
    ticket: { ...mockTicket },
    onClick: jest.fn(),
    ...override,
  };

  return {
    props,
    component: (
      <MemoryRouter>
        <TicketItem {...props} />
      </MemoryRouter>
    ),
  };
};

describe('Component: TicketItem', () => {
  it('should render name', () => {
    const { props, component } = setup({});

    render(component);

    const name = `${props.ticket.firstName} ${props.ticket.lastName}`;

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
