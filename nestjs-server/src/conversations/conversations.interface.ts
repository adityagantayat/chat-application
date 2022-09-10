import { CreateConversationParams } from '../utils/types';
import { Conversation, User } from '../utils/typeorm';
export interface IConversationsService {
  createConversation(user: User, conversationParams: CreateConversationParams);
  getConversations(id: number): Promise<Conversation[]>;
  findConversationByID(id: number): Promise<Conversation>;
}
