import { Controller, UseGuards, Post, Inject, Body } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/utils/Guards';
import { Routes, Services } from '../utils/constants';
import { IConversationsService } from './conversations.interface';
import { CreateConversationDto } from './dtos/CreateConversation.dto';
import { AuthUser } from '../utils/decorators';
import { User } from '../utils/typeorm';
import { IUserService } from '../users/user.interface';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationService: IConversationsService,
  ) {}

  @Post()
  createConversation(
    @AuthUser() user: User,
    @Body() createConversationPayload: CreateConversationDto,
  ) {
    return this.conversationService.createConversation(
      user,
      createConversationPayload,
    );
  }
}
