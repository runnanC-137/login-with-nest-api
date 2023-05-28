import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteUserRequest {
  @ApiProperty({
    description: 'id do usuários',
    example: 'puai',
  })
  @IsNotEmpty()
  id: string;
}
