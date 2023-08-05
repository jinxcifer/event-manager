import * as React from 'react';
import {
  useLoaderData,
  Link,
  Params,
  ParamParseKey,
  ActionFunctionArgs,
} from 'react-router-dom';

import { diContainer, TYPES } from '@app/container';
import { ITicketRepository } from '@app/outbound/repositories';

import { TicketList } from '@app/components/lists/TicketList';

import { Ticket } from '@app/types';

import classes from './EventPage.scss';

const PathNames = {
  events: '/events/:eventId',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.events>>;
}

export async function loader({ params }: Args) {
  const ticketRepository = diContainer.get<ITicketRepository>(
    TYPES.TicketRepository,
  );

  const tickets = await ticketRepository.getByEvent(Number(params.eventId));

  return { tickets };
}

export const EventPage: React.FC = ({}) => {
  const { tickets } = useLoaderData() as { tickets: Ticket[] };

  return (
    <div className={classes.container}>
      <Link to={'/'}>Back</Link>
      <TicketList tickets={tickets} />
    </div>
  );
};
