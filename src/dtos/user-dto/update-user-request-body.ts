import { IsEmail, IsEmpty, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserRequestBody {
  @IsNotEmpty()
  id: string;
  
  @Length(4, 30)
  name: string;

  @Length(4, 30)
  email: string;
}
