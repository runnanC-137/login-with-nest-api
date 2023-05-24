import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/implementation/prisma-user-repository';
import { HashProvider } from './provider/hash-provider';
import { BcryptJsProvider } from './provider/implementation/bcrypt-js-provider';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [],
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
export class AppModule {}
