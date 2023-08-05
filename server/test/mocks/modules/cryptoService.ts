import { ICryptoService } from '@app/services/crypto/crypto.interface';

export class MockCryptoService implements ICryptoService {
  generateRandomString = jest.fn();
}
