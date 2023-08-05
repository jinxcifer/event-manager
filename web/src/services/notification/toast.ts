import { injectable } from 'inversify';
import { toast } from 'react-toastify';

import { INotificationService } from './types';

@injectable()
export class ToastNotificationService implements INotificationService {
  info(msg: string) {
    toast.info(msg);
  }

  error(msg: string) {
    toast.error(msg);
  }
}
