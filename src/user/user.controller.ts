import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserRequestBody } from './dtos/create-user-request-body';
import { ReadUserRequestParam } from './dtos/read-user-request-body';
import { UpdateUserRequestBody } from './dtos/update-user-request-body';
import { DeleteUserRequestBody } from './dtos/delete-user-request-body';
import { UpdateUserPasswordRequestBody } from './dtos/update-user-password-request-body';
import { UserService } from 'src/user/user.service';
import { IUser } from './interfaces/user.interface';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
/* import { CurrentUser } from 'src/auth/decorators/current-user.decorator'; */

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /*   @Get('me')
  async me(@CurrentUser() user: User): Promise<IUser> {
    return user;
  } */

  @IsPublic()
  @Post()
  async create(@Body() body: CreateUserRequestBody): Promise<IUser> {
    const user = await this.userService.create(body);
    return user;
  }

  @IsPublic()
  @Get()
  async readAll(): Promise<IUser[]> {
    const users = await this.userService.readAll();
    return users;
  }

  @IsPublic()
  @Get(':id')
  async read(@Param() params: ReadUserRequestParam): Promise<IUser> {
    const user = await this.userService.read(params);
    return user;
  }

  // adm route
  @Put(':id')
  async update(
    @Body() { email, name }: UpdateUserRequestBody,
    @Param() { id }: ReadUserRequestParam,
  ): Promise<IUser> {
    const user = await this.userService.update({ email, id, name });
    return user;
  }
  // adm route
  @Put('password/:id')
  async updatePassword(
    @Body() { newPassword, password }: UpdateUserPasswordRequestBody,
    @Param() { id }: ReadUserRequestParam,
  ): Promise<any> {
    await this.userService.updatePassword({ id, newPassword, password });
    return { message: 'password changed with success' };
  }

  // adm route
  @Delete(':id')
  async delete(@Param() params: DeleteUserRequestBody): Promise<any> {
    await this.userService.delete(params);
    return { message: 'user deleted' };
  }
}
