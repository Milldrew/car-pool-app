import { Module } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';
import { GoogleAuthController } from './google-auth.controller';
import { GoogleOauthStrategy } from './google-oath.strategy';

@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleAuthGuard, GoogleOauthStrategy],
})
export class GoogleAuthModule {}
