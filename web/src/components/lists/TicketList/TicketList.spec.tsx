import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { mockTicket } from '@test/mocks/data/ticket';

import { TicketList } from './TicketList';

const setup = (override: any) => {
  const props = {
    tickets: [],
    ...override,
  };

  return {
    props,
    component: <TicketList {...props} />,
  };
};

describe('Component: TicketList', () => {
  it('should render tickets', () => {
    const tickets = [
      { ...mockTicket, firstName: 'Jan', lastName: 'Feuerbach' },
      { ...mockTicket, firstName: 'Tim', lastName: 'Feuerbach' },
    ];

    const { component } = setup({
      tickets,
    });

    render(component);

    expect(screen.getByText('Jan Feuerbach')).toBeInTheDocument();
    expect(screen.getByText('Tim Feuerbach')).toBeInTheDocument();
  });
});
