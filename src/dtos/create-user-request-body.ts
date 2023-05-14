import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserRequestBody {
  @IsNotEmpty()
  @Length(4, 30)
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
