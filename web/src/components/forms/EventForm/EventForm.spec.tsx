import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { EventForm } from './EventForm';

const setup = (override: any) => {
  const props = {
    onSubmit: jest.fn(),
    ...override,
  };

  return {
    props,
    component: (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <EventForm {...props} />
      </LocalizationProvider>
    ),
  };
};

describe('Component: EventForm', () => {
  it('should render submit button disabled on init', () => {
    const { component } = setup({});

    render(component);

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should render submit button disabled if title is not set', () => {
    const { component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('city-input'), {
      target: { value: 'Berlin' },
    });

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should render submit button disabled if city is not set', () => {
    const { component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('title-input'), {
      target: { value: 'Incubus' },
    });

    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
  });

  it('should call onSubmit if form is submitted', () => {
    const { props, component } = setup({});

    render(component);

    fireEvent.input(screen.getByLabelText('title-input'), {
      target: { value: 'Incubus' },
    });
    fireEvent.input(screen.getByLabelText('city-input'), {
      target: { value: 'Berlin' },
    });

    fireEvent.click(screen.getByText('Submit'));

    expect(props.onSubmit).toHaveBeenCalled();
  });
});
