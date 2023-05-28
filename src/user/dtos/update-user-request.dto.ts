import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateUserRequest {
  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'nome do usuários',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
