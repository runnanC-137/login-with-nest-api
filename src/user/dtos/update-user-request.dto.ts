import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserRequest {
  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  /*   @IsString()
  @IsEmail() */
  email: string;

  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'nome do usuários',
    example: 'John Doe',
  })
  /*   @IsString()
  @IsEmail() */
  name: string;
}
