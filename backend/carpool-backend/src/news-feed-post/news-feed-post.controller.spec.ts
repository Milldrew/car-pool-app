import { Test, TestingModule } from '@nestjs/testing';
import { NewsFeedPostController } from './news-feed-post.controller';
import { NewsFeedPostService } from './news-feed-post.service';

describe('NewsFeedPostController', () => {
  let controller: NewsFeedPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsFeedPostController],
      providers: [NewsFeedPostService],
    }).compile();

    controller = module.get<NewsFeedPostController>(NewsFeedPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
