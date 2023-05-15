import bcrypt from 'bcryptjs';
import { HashProvider } from '../hash-provider';

export class BcryptJsProvider implements HashProvider {
  hashPassword(password: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  verifyPassword(password: string, hashPassword: string): boolean {
    const isCorrectly = bcrypt.compareSync(password, hashPassword);
    return isCorrectly;
  }
}
