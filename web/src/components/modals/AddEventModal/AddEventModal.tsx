import * as React from 'react';

import { BaseModal } from '@app/components/modals/BaseModal';
import { EventForm, FormData } from '@app/components/forms/EventForm';

type PropsType = {
  isOpen: boolean;
  onAdd(event: FormData): void;
  onClose(): void;
};

export const AddEventModal: React.FC<PropsType> = ({
  isOpen,
  onAdd,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} title="Add Event" onClose={onClose}>
      <EventForm onSubmit={onAdd} />
    </BaseModal>
  );
};
