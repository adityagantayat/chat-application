import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../utils/typeorm';
import { IUserService } from '../../users/user.interface';
import { Services } from '../../utils/constants';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {
    super();
  }

  serializeUser(user: User, done: (...args: any[]) => any) {
    done(null, user);
  }

  async deserializeUser(user: User, done: (...args: any[]) => any) {
    const userDb = await this.userService.findUser({ id: user.id });
    return userDb ? done(null, userDb) : done(null, null);
  }
}
