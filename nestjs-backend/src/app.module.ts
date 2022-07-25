import connection from './typeorm-connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule, TypeOrmModule.forRoot(connection)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
