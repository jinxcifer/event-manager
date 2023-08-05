import * as React from 'react';

import { BaseModal } from '@app/components/modals/BaseModal';
import { TicketForm, FormData } from '@app/components/forms/TicketForm';

type PropsType = {
  isOpen: boolean;
  onAdd(event: FormData): void;
  onClose(): void;
};

export const AddTicketModal: React.FC<PropsType> = ({
  isOpen,
  onAdd,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} title="Add Ticket" onClose={onClose}>
      <TicketForm onSubmit={onAdd} />
    </BaseModal>
  );
};
