import { IsNotEmpty } from 'class-validator';

export class DeleteUserRequestBody {
  @IsNotEmpty()
  id: string;
}
