import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashProvider } from 'src/provider/hash-provider';
import { BcryptJsProvider } from 'src/provider/implementation/bcrypt-js-provider';
import { PrismaUserRepository } from 'src/repositories/implementation/prisma-user-repository';
import { UserRepository } from 'src/repositories/user-repository';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: HashProvider,
      useClass: BcryptJsProvider,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class UserModule {}
