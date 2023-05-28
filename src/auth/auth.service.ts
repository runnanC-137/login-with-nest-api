import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/repositories/user-repository';
import { HashProvider } from 'src/provider/hash-provider';
import { UserInRequest } from './interfaces/user-in-request';
import { UserPayload } from './interfaces/user-payload';
import { UserToken } from './interfaces/user-token';
import { LoginRequestBody } from './dtos/login-request-body.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
    private jwtService: JwtService,
  ) {}
  async validateUser({ email, password }: LoginRequestBody) {
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
  login(user: UserInRequest): UserToken {
    const payload: UserPayload = {
      sub: user.id,
    };
    const token = this.jwtService.sign(payload);
    return { token };
  }
}
