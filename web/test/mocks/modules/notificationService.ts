import { injectable } from 'inversify';

import { INotificationService } from '@app/services/notification';

@injectable()
export class MockNotificationService implements INotificationService {
  info = jest.fn();
  error = jest.fn();
}
