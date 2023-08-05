import { IsNotEmpty, IsString } from 'class-validator';

export class GetTicketsQueryDto {
  @IsString()
  @IsNotEmpty()
  eventId: number;
}
