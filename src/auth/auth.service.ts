import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository';
import { UserInRequest } from './interfaces/user-in-request';
import { HashProvider } from 'src/provider/hash-provider';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userRepository.readByEmail(email);

    if (user) {
      const isPasswordValid = this.hashProvider.verifyPassword(
        password,
        user.password,
      );

      if (isPasswordValid) {
        return {
          password: undefined,
          ...user,
        };
      }
    }

    throw new Error('password or email provided is incorrect');
  }
  async login(reqUser: UserInRequest) {}
}
