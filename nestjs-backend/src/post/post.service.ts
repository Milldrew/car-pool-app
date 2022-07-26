import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { postId: id } });
    if (!post) {
      throw new NotFoundException(`Post #${id} not found.`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.preload({
      postId: id,
      ...updatePostDto,
    });
    if (!post) {
      throw new NotFoundException(`Post #${id} not found`);
    }

    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({ where: { postId: id } });
    if (!post) {
      throw new NotFoundException(`Post #${id} not found.`);
    }
    return this.postRepository.remove(post);
  }
}
