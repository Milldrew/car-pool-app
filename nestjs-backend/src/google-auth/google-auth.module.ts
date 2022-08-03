import { Module } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';
import { GoogleAuthController } from './google-auth.controller';
import { GoogleOauthStrategy } from './google-oath.strategy';
import { UserModule } from 'src/user/user.module';
import { MyJwtModule } from 'src/jwt/jwt.module';

@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleAuthGuard, GoogleOauthStrategy],
  imports: [UserModule, MyJwtModule],
})
export class GoogleAuthModule {}
