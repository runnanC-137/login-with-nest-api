import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthdModule } from './authd/authd.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthdModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
