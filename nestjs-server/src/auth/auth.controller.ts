import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { IUserService } from '../users/user';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserLoginDto } from './dtos/UserLogin.dto';
import { LocalAuthGuard } from './utils/Guards';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  /**
   * @Handler : registerUser
   * @Route : /api/auth/register
   * @Purpose : Registers the user upon sign up
   */
  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    if (!user)
      throw new HttpException(
        `${createUserDto.email} already exists.`,
        HttpStatus.CONFLICT,
      );
    else return instanceToPlain(user);
  }

  /**
   * @Handler : login
   * @Route : /api/auth/login
   * @Purpose : validating user and logging in
   */
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Body() userLoginDto: UserLoginDto) {}

  /**
   * @Handler : status
   * @Route : /api/auth/status
   * @Purpose : Registers the user upon sign up
   */
  @Get('status')
  status() {}

  /**
   * @Handler : logout
   * @Route : /api/auth/logout
   * @Purpose : Logs the user out
   */
  @Post('logout')
  logout() {}
}
