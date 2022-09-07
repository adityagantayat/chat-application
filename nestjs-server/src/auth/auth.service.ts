import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IAuthService } from './auth';
import { ValidateUserDetails } from '../utils/types';
import { Services } from '../utils/constants';
import { compareHash } from '../utils/helpers';
import { IUserService } from '../users/user';
import { User } from '../utils/typeorm';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  async validateUser(
    userCredentials: ValidateUserDetails,
  ): Promise<User | null> {
    const user = await this.userService.findUser({
      email: userCredentials.email,
    });

    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

    const isPasswordValid = compareHash(
      userCredentials.password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }
}
