import { Injectable } from '@nestjs/common';

import { ICryptoService } from './crypto.interface';

@Injectable()
export class CryptoService implements ICryptoService {
  generateRandomString(length: number, charSet?: string): string {
    const characters =
      charSet ??
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let randomString = '';

    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return randomString;
  }
}
