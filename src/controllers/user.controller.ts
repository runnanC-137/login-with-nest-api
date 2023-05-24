import {  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete 
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserRequestBody } from '../user-dto/create-user-request-body';
import { ReadUserRequestBody } from '../user-dto/read-user-request-body';
import { UpdateUserRequestBody } from '../user-dto/update-user-request-body';
import { DeleteUserRequestBody } from '../user-dto/delete-user-request-body';
import { UpdateUserPasswordRequestBody } from '../user-dto/update-user-password-request-body';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserRequestBody): Promise<User> {
    const user = await this.userService.create(body);
    return user;
  }
  @Get('all')
  async readAll(): Promise<User[]> {
    const users = await this.userService.readAll();
    return users;
  }
  @Get(':id')
  async read(@Param() params: ReadUserRequestBody): Promise<User> {
    const user = await this.userService.read(params);
    return user;
  }
  @Put(':id')
  async update(@Body() body: UpdateUserRequestBody): Promise<User> {
    const user = await this.userService.update(body);
    return user;
  }
  @Delete(':id')
  async delete(@Param() params: DeleteUserRequestBody): Promise<any> {
    await this.userService.delete(params);
    return { message: 'user deleted' };
  }
}