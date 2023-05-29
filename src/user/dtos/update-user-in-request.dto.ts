import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserInRequest {
  @ApiProperty({
    description: 'email usado para login de usuários',
    example: 'email@email.com',
  })
  /*   @IsString()
  @IsEmail() */
  email: string;

  @ApiProperty({
    description: 'nome do usuários',
    example: 'John Doe',
  })
  /* @IsString() */
  name: string;
}
