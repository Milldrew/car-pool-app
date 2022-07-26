import { CreateUserDto } from 'src/user/dto/create-user.dto';
// https://github.com/thisismydesign/nestjs-starter/blob/master/src/server/app/auth/google/google-oauth.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignService } from 'src/jwt/sign/sign.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly signService: SignService,
    private readonly userService: UserService,
    configService: ConfigService,
  ) {
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
    const { sub, email, picture, family_name, given_name } = profile._json;
    const createUserDto: CreateUserDto = {
      userId: sub,
      email,
      firstName: given_name,
      lastName: family_name,
      photoUrl: picture,
    };
    this.userService.create(createUserDto);
    const jwtClaim = { sub };
    console.log(jwtClaim);
    const jwt = this.signService.signJwt(jwtClaim);
    console.log({ jwt });
    return jwt;
  }
}
