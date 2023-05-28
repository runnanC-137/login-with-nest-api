import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ReadUserRequest {
  @ApiProperty({
    description: 'id do usuários',
    example: 'puai',
  })
  @IsNotEmpty()
  id: string;
}
