import * as React from 'react';
import Button from '@mui/material/Button';

import { diContainer, TYPES } from '@app/container';
import {
  IEventRepository,
  ITicketRepository,
} from '@app/outbound/repositories';
import { INotificationService } from '@app/services/notification';

import { FormData as EventFormData } from '@app/components/forms/EventForm';
import { AddEventModal } from '@app/components/modals/AddEventModal';
import { EventList } from '@app/components/lists/EventList';
import { FormData as TicketFormData } from '@app/components/forms/TicketForm';
import { AddTicketModal } from '@app/components/modals/AddTicketModal';

import { Event } from '@app/types';

import classes from './HomePage.scss';

const MODAL = {
  NONE: 0,
  ADD_EVENT_MODAL: 1,
  ADD_TICKET_MODAL: 2,
};

export const HomePage: React.FC = ({}) => {
  const [modal, setModal] = React.useState<number>(MODAL.NONE);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [currentEventId, setCurrentEventId] = React.useState<number | null>(
    null,
  );

  const eventRepository = diContainer.get<IEventRepository>(
    TYPES.EventRepository,
  );
  const ticketRepository = diContainer.get<ITicketRepository>(
    TYPES.TicketRepository,
  );
  const notificationService = diContainer.get<INotificationService>(
    TYPES.NotificationService,
  );

  React.useEffect(() => {
    eventRepository
      .getAll()
      .then((events) => {
        setEvents(events);
      })
      .catch((err) => {
        notificationService.info(
          'An error occurred when trying to get all events, sorry!',
        );
        console.log(err);
      });
  }, []);

  const onAddEvent = async (event: EventFormData) => {
    try {
      const newEvent = await eventRepository.create(event);

      setEvents([...events, newEvent]);

      notificationService.info(`Event '${event.title}' was added!`);
    } catch (err) {
      notificationService.error(
        'An error occurred when trying to create an event, sorry!',
      );
      console.log(err);
    } finally {
      setModal(MODAL.NONE);
    }
  };

  const onAddEventTicket = (eventId: number) => {
    setCurrentEventId(eventId);
    setModal(MODAL.ADD_TICKET_MODAL);
  };

  const onAddTicket = async (ticket: TicketFormData) => {
    try {
      if (currentEventId)
        await ticketRepository.create({ ...ticket, eventId: currentEventId });

      notificationService.info(`Ticket sold for ${ticket.firstName}!`);
    } catch (err) {
      notificationService.error(
        'An error occurred when trying to buy a ticket, sorry!',
      );
      console.log(err);
    } finally {
      setCurrentEventId(null);
      setModal(MODAL.NONE);
    }
  };

  const onOpenModal = (modal: number) => {
    setModal(modal);
  };

  const onModalClose = () => {
    setModal(MODAL.NONE);
  };

  return (
    <div className={classes.container}>
      <Button
        onClick={() => onOpenModal(MODAL.ADD_EVENT_MODAL)}
        variant="outlined"
      >
        Add event
      </Button>
      <EventList events={events} onAddTicket={onAddEventTicket} />
      <AddEventModal
        isOpen={modal === MODAL.ADD_EVENT_MODAL}
        onAdd={onAddEvent}
        onClose={onModalClose}
      />
      <AddTicketModal
        isOpen={modal === MODAL.ADD_TICKET_MODAL}
        onAdd={onAddTicket}
        onClose={onModalClose}
      />
    </div>
  );
};
