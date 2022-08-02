import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth/google')
export class GoogleAuthController {
  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() _req) {}

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log('HELLO FROM REDIRECT');
    res.redirect('http://192.168.0.143:4200/');
    console.log('HELLO FROM REDIRECT');
    return 'from redirect';
  }
}
