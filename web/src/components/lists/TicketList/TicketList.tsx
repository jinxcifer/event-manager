import * as React from 'react';
import List from '@mui/material/List';

import { Ticket } from '@app/types';

import { TicketItem } from '@app/components/items/TicketItem';

type PropsType = {
  tickets: Ticket[];
};

export const TicketList: React.FC<PropsType> = ({ tickets }) => {
  return (
    <List>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </List>
  );
};
