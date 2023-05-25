import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashProvider } from 'src/provider/hash-provider';
import { BcryptJsProvider } from 'src/provider/implementation/bcrypt-js-provider';
import { PrismaUserRepository } from 'src/repositories/implementation/prisma-user-repository';
import { UserRepository } from 'src/repositories/user-repository';

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
  ],
})
export class UserModule {}
