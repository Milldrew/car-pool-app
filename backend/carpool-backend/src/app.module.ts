import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsFeedPostModule } from './news-feed-post/news-feed-post.module';
import { DynamodbModule } from './dynamodb/dynamodb.module';

@Module({
  imports: [NewsFeedPostModule, DynamodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
