import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/implementation/prisma-user-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AppModule {}
