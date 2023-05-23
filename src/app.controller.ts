import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user-entities';
import { CreateUserRequestBody } from './dtos/user-dto/create-user-request-body';
import { ReadUserRequestBody } from './dtos/user-dto/read-user-request-body';
import { UpdateUserRequestBody } from './dtos/user-dto/update-user-request-body';
import { DeleteUserRequestBody } from './dtos/user-dto/delete-user-request-body';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async create(@Body() body: CreateUserRequestBody): Promise<User> {
    const user = await this.appService.create(body);
    return user;
  }
  @Get('all')
  async readAll(): Promise<User[]> {
    const users = await this.appService.readAll();
    return users;
  }
  @Get(':id')
  async read(@Param() params: ReadUserRequestBody): Promise<User> {
    const user = await this.appService.read(params);
    return user;
  }
  @Put(':id')
  async update(@Body() body: UpdateUserRequestBody): Promise<User> {
    const user = await this.appService.update(body);
    return user;
  }
  @Delete(':id')
  async delete(@Param() params: DeleteUserRequestBody): Promise<any> {
    await this.appService.delete(params);
    return { message: 'user deleted' };
  }
}
