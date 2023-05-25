import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestBody {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
