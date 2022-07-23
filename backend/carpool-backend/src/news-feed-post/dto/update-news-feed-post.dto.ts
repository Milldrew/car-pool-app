import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsFeedPostDto } from './create-news-feed-post.dto';

export class UpdateNewsFeedPostDto extends PartialType(CreateNewsFeedPostDto) {}
