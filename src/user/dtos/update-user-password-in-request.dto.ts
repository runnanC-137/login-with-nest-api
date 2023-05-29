import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class UpdateUserPasswordInRequest {
  @ApiProperty({
    description: 'senha atual do usuário',
    example: 'SenhaForte',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'nova senha do usuário',
    example: 'novaSenhaForte',
  })
  @IsNotEmpty()
  @Length(4, 30)
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  newPassword: string;
}
