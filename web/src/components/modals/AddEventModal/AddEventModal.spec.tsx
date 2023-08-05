import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { AddEventModal } from './AddEventModal';

const setup = (override: any) => {
  const props = {
    isOpen: false,
    onAdd: jest.fn(),
    onClose: jest.fn(),
    ...override,
  };

  return {
    props,
    component: (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AddEventModal {...props} />
      </LocalizationProvider>
    ),
  };
};

describe('Component: AddEventModal', () => {
  it('should show modal if isOpen is true', () => {
    const { component } = setup({
      isOpen: true,
    });

    render(component);

    expect(screen.getByText('Add Event')).toBeTruthy();
  });

  it('should not show modal if isOpen is false', () => {
    const { component } = setup({
      isOpen: false,
    });

    render(component);

    expect(screen.queryByText('Add Event')).toBeNull();
  });
});
