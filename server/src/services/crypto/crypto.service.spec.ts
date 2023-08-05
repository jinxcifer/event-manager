import { Test } from '@nestjs/testing';

import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let cryptoService: CryptoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    cryptoService = moduleRef.get<CryptoService>(CryptoService);
  });

  it('should generate a random string with a fixed length', () => {
    const length = 4;
    const str = cryptoService.generateRandomString(length);

    expect(str.length).toBe(length);
  });

  it('should generate a random string with a fixed charset', () => {
    const length = 8;
    const charSet = 'a';
    const str = cryptoService.generateRandomString(length, charSet);

    expect(str).toEqual('aaaaaaaa');
  });
});
