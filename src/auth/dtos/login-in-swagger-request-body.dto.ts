import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginInSwaggerRequestBody {
  @ApiProperty({
    description: 'senha do usuários',
    example: 'senhaNãoFraca',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  @IsEmail()
  email: string;
}
