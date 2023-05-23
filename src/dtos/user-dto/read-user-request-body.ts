import { IsNotEmpty } from 'class-validator';

export class ReadUserRequestBody {
  @IsNotEmpty()
  id: string;
}
