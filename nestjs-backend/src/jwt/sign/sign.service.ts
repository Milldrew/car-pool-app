import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignService {
  constructor(private readonly jwtService: JwtService) {}

  signJwt(jwtClaim: any) {
    return this.jwtService.sign(jwtClaim);
  }
}
