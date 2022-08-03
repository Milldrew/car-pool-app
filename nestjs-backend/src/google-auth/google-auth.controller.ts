import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private readonly userService: UserService) {
    console.log(this.userService);
  }

  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() _req) {}

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log(req.user);
    res.redirect(`http://192.168.0.143:4200?${req.user}`);
    return 'hello';
  }
}
