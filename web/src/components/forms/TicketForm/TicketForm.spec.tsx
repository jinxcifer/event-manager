import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { TicketForm } from './TicketForm';

const setup = (override: any) => {
  const props = {
    onSubmit: jest.fn(),
    ...override,
  };

  return {
    props,
    component: <TicketForm {...props} />,
  };
};

describe('Component: TicketForm', () => {
  it('should render submit button disabled on init', () => {
    const { component } = setup({});

    render(component);

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should render submit button disabled if firstname is not set', () => {
    const { component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('lastname-input'), {
      target: { value: 'Feuerbach' },
    });

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should render submit button disabled if lastname is not set', () => {
    const { component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('firstname-input'), {
      target: { value: 'Jan' },
    });

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should call onSubmit if form is submitted', () => {
    const { props, component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('firstname-input'), {
      target: { value: 'Jan' },
    });
    fireEvent.input(screen.getByLabelText('lastname-input'), {
      target: { value: 'Feuerbach' },
    });

    fireEvent.click(screen.getByText('Submit'));

    expect(props.onSubmit).toHaveBeenCalledWith({
      firstName: 'Jan',
      lastName: 'Feuerbach',
    });
  });
});
