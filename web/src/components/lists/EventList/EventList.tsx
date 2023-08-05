import * as React from 'react';

import { Event } from '@app/types';

import { EventItem } from '@app/components/items/EventItem';

import classes from './EventList.scss';

type PropsType = {
  events: Event[];
  onAddTicket(eventId: number): void;
};

export const EventList: React.FC<PropsType> = ({ events, onAddTicket }) => {
  return (
    <div className={classes.container}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} onClick={onAddTicket} />
      ))}
    </div>
  );
};
