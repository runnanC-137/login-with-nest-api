import { Injectable } from '@nestjs/common';
import { CreateUserRequestBody } from './dtos/create-user-request-body';
import { User } from './entities/user-entities';
import { UserRepository } from './repositories/user-repository';
import { ReadUserRequestBody } from './dtos/read-user-request-body';
import { UpdateUserRequestBody } from './dtos/update-user-request-body';
import { DeleteUserRequestBody } from './dtos/delete-user-request-body';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}
  async create({
    name,
    email,
    password,
  }: CreateUserRequestBody): Promise<User> {
    const emailInUse = await this.userRepository.readByEmail(email);
    if (emailInUse) {
      throw new Error('');
    }
    const parcialUser = new User({ name, email, password });
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
    await this.userRepository.delete(id);
  }
  /*async readByEmail() {
    const user = 'name + email;';
    return user;
  }
  async readAll() {
    const user = 'name + email;';
    return user;
  }
  
  async delete() {
    const user = 'name + email;';
    return user;
  } */
}
