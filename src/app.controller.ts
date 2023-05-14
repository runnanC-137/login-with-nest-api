import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestBody } from './dtos/create-user-request-body';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async create(@Body() body: CreateUserRequestBody): Promise<any> {
    const user = await this.appService.create(body);
    return user;
  }
  @Get('/all')
  async readAll(): Promise<any> {
    const users = await this.appService.read();
    return users;
  }
}
