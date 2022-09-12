import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Message } from '../utils/typeorm';
import { IMessageService } from './messages.interface';
import { CreateMessageParams } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from '../utils/typeorm/entities/Conversation';
import { instanceToPlain } from 'class-transformer';
import { User } from '../utils/typeorm/entities/User';

@Injectable()
export class MessagesService implements IMessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
  ) {}

  async createMessage(params: CreateMessageParams): Promise<Message> {
    const conversation = await this.conversationRepository.findOne({
      where: { id: params.conversationId },
      relations: ['creator', 'recipient'],
    });
    if (!conversation)
      throw new HttpException('Conversation not found', HttpStatus.BAD_REQUEST);
    if (
      conversation.creator.id !== params.user.id &&
      conversation.creator.id !== params.user.id
    )
      throw new HttpException('Cannot create message', HttpStatus.FORBIDDEN);
    conversation.creator = instanceToPlain(conversation.creator) as User;
    conversation.recipient = instanceToPlain(conversation.recipient) as User;
    const newMessage = this.messageRepository.create({
      content: params.content,
      conversation,
      author: instanceToPlain(params.user),
    });
    return this.messageRepository.save(newMessage);
  }
}
