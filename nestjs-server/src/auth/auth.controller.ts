import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/types';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}

  /**
   * @Handler : registerUser
   * @Route : /api/auth/register
   * @Purpose : Registers the user upon sign up
   */
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  /**
   * @Handler : login
   * @Route : /api/auth/login
   * @Purpose : validating user and logging in
   */
  @Post('login')
  login() {}

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
