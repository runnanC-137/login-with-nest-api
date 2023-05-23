import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { HashProvider } from '../hash-provider';

@Injectable()
export class BcryptJsProvider implements HashProvider {
  hashPassword(password: string): string {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);
    return hash;
  }

  verifyPassword(password: string, hashPassword: string): boolean {
    const isCorrectly = compareSync(password, hashPassword);
    return isCorrectly;
  }
}
