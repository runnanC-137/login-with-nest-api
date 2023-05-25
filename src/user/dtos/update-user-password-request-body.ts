import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserPasswordRequestBody {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @Length(4, 30)
  newPassword: string;

  @IsNotEmpty()
  @IsEmail()
  password: string;
}
