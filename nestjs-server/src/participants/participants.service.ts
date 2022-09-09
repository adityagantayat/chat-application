import { Injectable } from '@nestjs/common';
import { Participant } from '../utils/typeorm';
import { IParticipantsService } from './participants.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParticipantParams, FindParticipantParams } from '../utils/types';

@Injectable()
export class ParticipantsService implements IParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}
  findOrCreateParticipant() {
    throw new Error('Method not implemented.');
  }
  findParticipant(params: FindParticipantParams): Promise<Participant | null> {
    return this.participantRepository.findOne(params);
  }
  createParticipant(params: CreateParticipantParams): Promise<Participant> {
    const newParticipant = this.participantRepository.create(params);
    return this.participantRepository.save(newParticipant);
  }
}
