import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsFeedPostService } from './news-feed-post.service';
import { CreateNewsFeedPostDto } from './dto/create-news-feed-post.dto';
import { UpdateNewsFeedPostDto } from './dto/update-news-feed-post.dto';

@Controller('news-feed-post')
export class NewsFeedPostController {
  constructor(private readonly newsFeedPostService: NewsFeedPostService) {}

  @Post()
  create(@Body() createNewsFeedPostDto: CreateNewsFeedPostDto) {
    return this.newsFeedPostService.create(createNewsFeedPostDto);
  }

  @Get()
  findAll() {
    return this.newsFeedPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsFeedPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsFeedPostDto: UpdateNewsFeedPostDto) {
    return this.newsFeedPostService.update(+id, updateNewsFeedPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsFeedPostService.remove(+id);
  }
}
