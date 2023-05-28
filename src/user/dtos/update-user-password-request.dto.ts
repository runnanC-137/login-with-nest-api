import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserPasswordRequest {
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'senha atual do usuário',
    example: 'SenhaForte',
  })
  @IsNotEmpty()
  @IsEmail()
  password: string;

  @ApiProperty({
    description: 'nova senha do usuário',
    example: 'novaSenhaForte',
  })
  @IsNotEmpty()
  @Length(4, 30)
  newPassword: string;
}
