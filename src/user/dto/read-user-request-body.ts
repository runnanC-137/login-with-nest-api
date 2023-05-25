import { IsNotEmpty } from 'class-validator';

export class ReadUserRequestParam {
  @IsNotEmpty()
  id: string;
}
