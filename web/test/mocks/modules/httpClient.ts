import { injectable } from 'inversify';

import { IHttpClient } from '@app/services/http';

@injectable()
export class MockHttpClient implements IHttpClient {
  get = jest.fn();
  post = jest.fn();
}
