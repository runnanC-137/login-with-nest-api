import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserRequestBody {
  @IsNotEmpty()
  @Length(4, 30)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
