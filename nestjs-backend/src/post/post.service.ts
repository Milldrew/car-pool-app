import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  create(createPostDto: CreatePostDto) {
    console.table(createPostDto);
    const post = this.postRepository.create(createPostDto);
    try {
      const fakePost: Post = {
        username: 'username',
        userId: 3,
        seatingAmount: 3,
        postId: 3,
        isRequest: true,
        userImgUrl: 'imgurl',
        date: 'date',
        moreInfo: 'moreinf',
        phoneNumber: '555-555-5555',
      };
      this.postRepository.save(this.postRepository.create(post));
    } catch (error) {
      console.log(error);
    }
    /* 
    console.log(createPostDto);
    return this.postRepository.create();
    */
    return createPostDto;
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
