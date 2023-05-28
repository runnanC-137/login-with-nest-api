import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserRequest } from './dtos/create-user-request.dto';
import { ReadUserRequest } from './dtos/read-user-request.dto';
import { UpdateUserRequest } from './dtos/update-user-request.dto';
import { DeleteUserRequest } from './dtos/delete-user-request.dto';
import { UpdateUserPasswordRequest } from './dtos/update-user-password-request.dto';
import { UserService } from 'src/user/user.service';
import { IUser } from './interfaces/user.interface';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @IsPublic()
  @Post()
  async create(@Body() body: CreateUserRequest): Promise<IUser> {
    const user = await this.userService.create(body);
    return user;
  }

  @Get()
  async readMe(@CurrentUser() user: IUser): Promise<IUser> {
    return user;
  }

  @IsPublic()
  @Get('all')
  async readAll(): Promise<IUser[]> {
    const users = await this.userService.readAll();
    return users;
  }

  @IsPublic()
  @Get(':id')
  async read(@Param() params: ReadUserRequest): Promise<IUser> {
    const user = await this.userService.read(params);
    return user;
  }

  // adm route
  @Put(':id')
  async update(
    @Body() { email, name }: UpdateUserRequest,
    @Param() { id }: ReadUserRequest,
  ): Promise<IUser> {
    const user = await this.userService.update({ email, id, name });
    return user;
  }
  // adm route
  @Put('password/:id')
  async updatePassword(
    @Body() { newPassword, password }: UpdateUserPasswordRequest,
    @Param() { id }: ReadUserRequest,
  ): Promise<any> {
    await this.userService.updatePassword({ id, newPassword, password });
    return { message: 'password changed with success' };
  }

  // adm route
  @Delete(':id')
  async delete(@Param() params: DeleteUserRequest): Promise<any> {
    await this.userService.delete(params);
    return { message: 'user deleted' };
  }
}
