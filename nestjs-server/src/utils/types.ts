import { User } from './typeorm';

export type CreateUserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
};
export type ValidateUserDetails = {
  email: string;
  password: string;
};
export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;
export type CreateConversationParams = {
  recipientId: number;
  message: string;
};
export interface AuthenticatedRequest extends Request {
  user: User;
}
export type FindParticipantParams = Partial<{
  id: number;
}>;
export type CreateParticipantParams = {
  id: number;
};
export type CreateMessageParams = {
  content: string;
  conversationId: number;
  user: User;
};
