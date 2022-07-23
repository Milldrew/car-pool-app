import { Module } from '@nestjs/common';
import { NewsFeedPostService } from './news-feed-post.service';
import { NewsFeedPostController } from './news-feed-post.controller';

@Module({
  controllers: [NewsFeedPostController],
  providers: [NewsFeedPostService]
})
export class NewsFeedPostModule {}
