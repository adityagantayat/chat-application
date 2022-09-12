import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IConversationsService } from './conversations.interface';
import { CreateConversationParams } from '../utils/types';
import { Conversation } from '../utils/typeorm/entities/Conversation';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from '../utils/constants';
import { User } from '../utils/typeorm/entities/User';
import { IUserService } from '../users/user.interface';

@Injectable()
export class ConversationsService implements IConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {}

  async getConversations(id: number): Promise<Conversation[]> {
    return this.conversationRepository
      .createQueryBuilder('conversation')
      .leftJoin('conversation.creator', 'creator')
      .addSelect([
        'creator.id',
        'creator.firstName',
        'creator.lastName',
        'creator.email',
        'creator.image',
      ])
      .leftJoin('conversation.recipient', 'recipient')
      .addSelect([
        'recipient.id',
        'recipient.firstName',
        'recipient.lastName',
        'recipient.email',
        'recipient.image',
      ])
      .where('creator.id = :id', { id })
      .orWhere('recipient.id = :id', { id })
      .orderBy('conversation.id', 'DESC')
      .getMany();
  }
  async createConversation(user: User, params: CreateConversationParams) {
    const { recipientId } = params;
    if (user.id === params.recipientId)
      throw new HttpException(
        'Cannot Create Conversation',
        HttpStatus.BAD_REQUEST,
      );

    const existingConversation = await this.conversationRepository.findOne({
      where: [
        {
          creator: { id: user.id },
          recipient: { id: recipientId },
        },
        {
          creator: { id: recipientId },
          recipient: { id: user.id },
        },
      ],
    });

    if (existingConversation)
      throw new HttpException('Conversation exists', HttpStatus.CONFLICT);
    const recipient = await this.userService.findUser({ id: recipientId });

    if (!recipient)
      throw new HttpException('Recipient not found', HttpStatus.BAD_REQUEST);

    const conversation = this.conversationRepository.create({
      creator: user,
      recipient: recipient,
    });
    return this.conversationRepository.save(conversation);
  }

  async findConversationByID(id: number): Promise<Conversation> {
    return this.conversationRepository.findOne(id);
  }
}
