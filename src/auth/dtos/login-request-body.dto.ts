import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestBody {
  @ApiProperty({
    description: 'senha do usuários',
    example: 'senhaNãoFraca',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
