import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IAuthService } from './auth';
import { ValidateUserDetails } from '../utils/types';
import { Services } from '../utils/constants';
import { compareHash } from '../utils/helpers';
import { IUserService } from '../users/user';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  async validateUser(userCredentials: ValidateUserDetails) {
    const user = await this.userService.findUser({
      email: userCredentials.email,
    });

    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

    return compareHash(userCredentials.password, user.password);
  }
}
