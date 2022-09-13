import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Message } from '../utils/typeorm';
import { IMessageService } from './messages.interface';
import { CreateMessageParams } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from '../utils/typeorm/entities/Conversation';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class MessagesService implements IMessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
  ) {}

  async getMessagesByConversationId(id: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: {
        conversation: { id },
      },
      order: {
        createdAt: 'DESC',
      },
      relations: ['author'],
    });
  }

  async createMessage(params: CreateMessageParams): Promise<Message> {
    const conversation = await this.conversationRepository.findOne({
      where: { id: params.conversationId },
      relations: ['creator', 'recipient'],
    });
    if (!conversation)
      throw new HttpException('Conversation not found', HttpStatus.BAD_REQUEST);
    if (
      conversation.creator.id !== params.user.id &&
      conversation.recipient.id !== params.user.id
    )
      throw new HttpException('Cannot create message', HttpStatus.FORBIDDEN);
    const newMessage = this.messageRepository.create({
      content: params.content,
      conversation,
      author: instanceToPlain(params.user),
    });
    const savedMessage = await this.messageRepository.save(newMessage);
    conversation.lastMessageSent = savedMessage;
    await this.conversationRepository.save(conversation);
    return;
  }
}
