import { Injectable } from '@nestjs/common';
import { CreateUserRequestBody } from './dtos/create-user-request-body';
import { User } from './entities/user-entities';
import { UserRepository } from './repositories/user-repository';
import { ReadUserRequestBody } from './dtos/read-user-request-body';
import { UpdateUserRequestBody } from './dtos/update-user-request-body';
import { DeleteUserRequestBody } from './dtos/delete-user-request-body';
import { HashProvider } from './provider/hash-provider';

@Injectable()
export class AppService {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
  ) {}
  async create({
    name,
    email,
    password,
  }: CreateUserRequestBody): Promise<User> {
    const emailInUse = await this.userRepository.readByEmail(email);
    if (emailInUse) {
      throw new Error('');
    }
    const hashPassword = this.hashProvider.hashPassword(password);
    const parcialUser = new User({ name, email, password: hashPassword });
    const defineUser = await this.userRepository.create(parcialUser);
    return defineUser;
  }
  async readAll() {
    const users = await this.userRepository.readAll();
    return users;
  }
  async read({ id }: ReadUserRequestBody) {
    const user = await this.userRepository.read(id);
    return user;
  }
  
  async update({ id, name }: UpdateUserRequestBody) {
    const parcialUser = await this.userRepository.read(id);
    parcialUser.name = name;
    const defineUser = await this.userRepository.update(parcialUser);
    return defineUser;
  }

  async delete({ id }: DeleteUserRequestBody) {
    const userExit = await this.userRepository.read(id);
    if (userExit === null) {
      throw new Error('mama mia');
    }
    await this.userRepository.delete(id);
  }
}
