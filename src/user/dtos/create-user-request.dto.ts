import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../entities/user.entities';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserRequest extends User {
  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'senha usada para login de usuários',
    example: 'senhaNãoFraca',
  })
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    description: 'nome do usuários',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
