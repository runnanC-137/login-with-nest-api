import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from '../repositories/user-repository';
import { PrismaUserRepository } from '../repositories/implementation/prisma-user-repository';
import { HashProvider } from 'src/provider/hash-provider';
import { BcryptJsProvider } from 'src/provider/implementation/bcrypt-js-provider';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
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
export class AuthModule {}
