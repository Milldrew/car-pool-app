import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { SignService } from './sign/sign.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [JwtStrategy, SignService],
  exports: [JwtModule, SignService],
})
export class MyJwtModule {}
