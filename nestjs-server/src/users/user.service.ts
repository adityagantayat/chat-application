import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserDetails, FindUserParams } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../utils/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../utils/helpers';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**
   * @Function : createUser
   * @Tables_Affected : users
   * @Purpose : creates a new user in table if the email id isn't already present
   */
  async createUser(userDetails: CreateUserDetails): Promise<User> {
    const hashedPassword = await hashPassword(userDetails.password);

    const existingUser = await this.userRepository.findOne({
      email: userDetails.email,
    });
    if (existingUser) return null;

    const newUser = this.userRepository.create({
      ...userDetails,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  /**
   * @Function : findUser
   * @Tables_Affected : users
   * @Purpose : Finds the user in table either by id or email
   */
  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOne(findUserParams);
  }
}
