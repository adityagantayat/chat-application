import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateConversationDto {
  @IsNumber()
  @IsNotEmpty()
  recipientId: number;

  @IsNotEmpty()
  message: string;
}
