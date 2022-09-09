import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IConversationsService } from './conversations.interface';
import { CreateConversationParams } from '../utils/types';
import { Conversation } from '../utils/typeorm/entities/Conversation';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from '../utils/constants';
import { IParticipantsService } from '../participants/participants.interface';
import { User } from '../utils/typeorm/entities/User';
import { IUserService } from '../users/user.interface';
import { Participant } from '../utils/typeorm/entities/Participant';

@Injectable()
export class ConversationsService implements IConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(Services.PARTICIPANTS)
    private readonly participantService: IParticipantsService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {}

  async createConversation(user: User, params: CreateConversationParams) {
    const participants: Participant[] = [];
    const userDB = await this.userService.findUser({ id: user.id });
    if (!userDB.participant) {
      await this.createParticipantAndSaveUser(userDB, user.id, participants);
    } else {
      participants.push(userDB.participant);
    }
    const recipient = await this.userService.findUser({
      id: params.recipientId,
    });

    if (!recipient)
      throw new HttpException(
        'Recipient Does not Exist',
        HttpStatus.BAD_REQUEST,
      );

    if (!recipient.participant) {
      await this.createParticipantAndSaveUser(
        recipient,
        recipient.id,
        participants,
      );
    } else {
      participants.push(recipient.participant);
    }
    const conversation = this.conversationRepository.create({
      participants,
    });
    return this.conversationRepository.save(conversation);
  }

  private async createParticipantAndSaveUser(
    user: User,
    id: number,
    participants: Participant[],
  ) {
    const newParticipant = await this.participantService.createParticipant({
      id,
    });
    user.participant = newParticipant;
    const savedUser = await this.userService.saveUser(user);
    participants.push(savedUser.participant);
    return savedUser;
  }
}
