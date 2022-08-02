// https://github.com/thisismydesign/nestjs-starter/blob/master/src/server/app/auth/google/google-oauth.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    console.log('hello from strategy');
    console.log(configService.get('OAUTH_GOOGLE_ID'));
    console.log(configService.get('OAUTH_GOOGLE_SECRET'));
    console.log(configService.get('OAUTH_GOOGLE_REDIRECT_URL'));
    super({
      clientID: configService.get<string>('OAUTH_GOOGLE_ID'),
      clientSecret: configService.get<string>('OAUTH_GOOGLE_SECRET'),
      callbackURL: configService.get<string>('OAUTH_GOOGLE_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    console.log(profile);
    console.log('HELLO FORM VALIDATE');
    const user = {
      provider: 'google',
      providerId: 123,
      name: 'name',
      username: 'username',
    };
    return user;
  }
}
