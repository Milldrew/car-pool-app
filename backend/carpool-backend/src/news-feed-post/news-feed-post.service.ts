import { Injectable } from '@nestjs/common';
import { CreateNewsFeedPostDto } from './dto/create-news-feed-post.dto';
import { UpdateNewsFeedPostDto } from './dto/update-news-feed-post.dto';

@Injectable()
export class NewsFeedPostService {
  create(createNewsFeedPostDto: CreateNewsFeedPostDto) {
    return 'This action adds a new newsFeedPost';
  }

  findAll() {
    return `This action returns all newsFeedPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsFeedPost`;
  }

  update(id: number, updateNewsFeedPostDto: UpdateNewsFeedPostDto) {
    return `This action updates a #${id} newsFeedPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsFeedPost`;
  }
}
