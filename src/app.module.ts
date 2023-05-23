import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/implementation/prisma-user-repository';
import { HashProvider } from './provider/hash-provider';
import { BcryptJsProvider } from './provider/implementation/bcrypt-js-provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
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
