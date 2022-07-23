import { Test, TestingModule } from '@nestjs/testing';
import { NewsFeedPostService } from './news-feed-post.service';

describe('NewsFeedPostService', () => {
  let service: NewsFeedPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsFeedPostService],
    }).compile();

    service = module.get<NewsFeedPostService>(NewsFeedPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
