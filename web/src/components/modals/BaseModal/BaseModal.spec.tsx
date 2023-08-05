import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BaseModal } from './BaseModal';

const setup = (override: any) => {
  const props = {
    isOpen: false,
    title: 'Title',
    children: <div></div>,
    onClose: jest.fn(),
    ...override,
  };

  return {
    props,
    component: <BaseModal {...props} />,
  };
};

describe('Component: BaseModal', () => {
  it('should show modal if isOpen is true', () => {
    const { component } = setup({
      isOpen: true,
      children: <div aria-label="modal-content"></div>,
    });

    render(component);

    expect(screen.getByLabelText('modal-content')).toBeTruthy();
  });

  it('should not show modal if isOpen is false', () => {
    const { component } = setup({
      isOpen: false,
      children: <div aria-label="modal-content"></div>,
    });

    render(component);

    expect(screen.queryByLabelText('modal-content')).toBeNull();
  });

  it('should render title', () => {
    const { props, component } = setup({
      isOpen: true,
      children: <div aria-label="modal-content"></div>,
    });

    render(component);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
