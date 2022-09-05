import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserDetails } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../utils/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../utils/helpers';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const hashedPassword = await hashPassword(userDetails.password);

    const existingUser = await this.userRepository.findOneBy({
      email: userDetails.email,
    });
    if (existingUser) return null;

    const newUser = this.userRepository.create({
      ...userDetails,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }
}
