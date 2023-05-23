import { IsEmail, IsEmpty, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserPasswordRequestBody {
  @IsNotEmpty()
  id: string;
  
  @Length(4, 30)
  password: string;

  @Length(4, 30)
  newPassword: string;
}
