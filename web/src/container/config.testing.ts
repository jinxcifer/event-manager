import { Container } from 'inversify';

import { TYPES } from '@app/container/types';

import { IHttpClient } from '@app/services/http';
import { IEventMapper, ITicketMapper } from '@app/outbound/mapper';
import {
  IEventRepository,
  ITicketRepository,
} from '@app/outbound/repositories';
import { INotificationService } from '@app/services/notification';
import { MockHttpClient } from '@test/mocks/modules/httpClient';
import { MockEventMapper } from '@test/mocks/modules/eventMapper';
import { MockTicketMapper } from '@test/mocks/modules/ticketMapper';
import { MockEventRepository } from '@test/mocks/modules/eventRepository';
import { MockTicketRepository } from '@test/mocks/modules/ticketRepository';
import { MockNotificationService } from '@test/mocks/modules/notificationService';

const diContainer = new Container();

diContainer.bind<IHttpClient>(TYPES.HttpClient).to(MockHttpClient);
diContainer.bind<IEventMapper>(TYPES.EventMapper).to(MockEventMapper);
diContainer.bind<ITicketMapper>(TYPES.TicketMapper).to(MockTicketMapper);
diContainer
  .bind<IEventRepository>(TYPES.EventRepository)
  .to(MockEventRepository);
diContainer
  .bind<ITicketRepository>(TYPES.TicketRepository)
  .to(MockTicketRepository);
diContainer
  .bind<INotificationService>(TYPES.NotificationService)
  .to(MockNotificationService);

export { diContainer };
