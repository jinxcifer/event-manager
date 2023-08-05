import { Container } from 'inversify';

import {
  EventMapper,
  IEventMapper,
  TicketMapper,
  ITicketMapper,
} from '@app/outbound/mapper';
import {
  EventRepository,
  IEventRepository,
  TicketRepository,
  ITicketRepository,
} from '@app/outbound/repositories';
import { AxiosHttpClient, IHttpClient } from '@app/services/http';
import {
  INotificationService,
  ToastNotificationService,
} from '@app/services/notification';

import { TYPES } from './types';

const diContainer = new Container();

diContainer.bind<IHttpClient>(TYPES.HttpClient).to(AxiosHttpClient);
diContainer.bind<IEventMapper>(TYPES.EventMapper).to(EventMapper);
diContainer.bind<ITicketMapper>(TYPES.TicketMapper).to(TicketMapper);
diContainer.bind<IEventRepository>(TYPES.EventRepository).to(EventRepository);
diContainer
  .bind<ITicketRepository>(TYPES.TicketRepository)
  .to(TicketRepository);
diContainer
  .bind<INotificationService>(TYPES.NotificationService)
  .to(ToastNotificationService);

export { diContainer };
