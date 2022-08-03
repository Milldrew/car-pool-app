import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto, 'createUserDto');
    const user = this.userRepository.create(createUserDto);
    console.log(user, 'user');
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ userId: id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      userId: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneBy({ userId: id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }
    return this.userRepository.remove(user);
  }
}
