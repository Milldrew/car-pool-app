import connection from './typeorm-connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MyJwtModule } from './jwt/jwt.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot(connection),
    GoogleAuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    MyJwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
