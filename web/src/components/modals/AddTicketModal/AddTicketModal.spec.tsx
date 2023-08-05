import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { AddTicketModal } from './AddTicketModal';

const setup = (override: any) => {
  const props = {
    isOpen: false,
    onAdd: jest.fn(),
    onClose: jest.fn(),
    ...override,
  };

  return {
    props,
    component: <AddTicketModal {...props} />,
  };
};

describe('Component: AddTicketModal', () => {
  it('should show modal if isOpen is true', () => {
    const { component } = setup({
      isOpen: true,
    });

    render(component);

    expect(screen.getByText('Add Ticket')).toBeTruthy();
  });

  it('should not show modal if isOpen is false', () => {
    const { component } = setup({
      isOpen: false,
    });

    render(component);

    expect(screen.queryByText('Add Ticket')).toBeNull();
  });
});
