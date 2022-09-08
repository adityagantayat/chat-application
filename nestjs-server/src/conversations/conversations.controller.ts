import { Controller, UseGuards, Post, Inject, Body } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/utils/Guards';
import { Routes, Services } from '../utils/constants';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationService: IConversationsService,
  ) {}

  @Post()
  createConversation(@Body() createConversationPayload: CreateConversationDto) {
    console.log(createConversationPayload);
    this.conversationService.createConversation(createConversationPayload);
  }
}
