import { IsNotEmpty, Length } from 'class-validator';

export class UpdateUserRequestBody {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @Length(4, 30)
  name: string;
}
