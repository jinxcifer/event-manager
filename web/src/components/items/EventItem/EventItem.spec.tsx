import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { mockEvent } from '@test/mocks/data/event';

import { EventItem } from './EventItem';

const setup = (override: any) => {
  const props = {
    event: { ...mockEvent },
    onClick: jest.fn(),
    ...override,
  };

  return {
    props,
    component: (
      <MemoryRouter>
        <EventItem {...props} />
      </MemoryRouter>
    ),
  };
};

describe('Component: TicketItem', () => {
  it('should render title', () => {
    const { props, component } = setup({});

    render(component);

    expect(screen.getByText(props.event.title)).toBeInTheDocument();
  });

  it('should render city', () => {
    const { props, component } = setup({});

    render(component);

    expect(screen.getByText(props.event.city)).toBeInTheDocument();
  });

  it('should render date', () => {
    const { props, component } = setup({});

    render(component);

    expect(
      screen.getByText(props.event.date.toDateString()),
    ).toBeInTheDocument();
  });

  it('should call onClick if buy ticket is clicked', () => {
    const { props, component } = setup({});

    render(component);

    fireEvent.click(screen.getByText('Buy ticket'));

    expect(props.onClick).toHaveBeenCalledWith(props.event.id);
  });
});
