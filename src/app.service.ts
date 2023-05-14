import { Injectable } from '@nestjs/common';
import { CreateUserRequestBody } from './dtos/create-user-request-body';
import { User } from './entities/user-entities';
import { UserRepository } from './repositories/user-repository';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}
  async create({
    name,
    email,
    password,
  }: CreateUserRequestBody): Promise<User> {
    const parcialUser = new User({ name, email, password });
    const defineUser = this.userRepository.create(parcialUser);
    return defineUser;
  }
  async read() {
    const users = this.userRepository.findAll();
    return users;
  }
  /*async readByEmail() {
    const user = 'name + email;';
    return user;
  }
  async readAll() {
    const user = 'name + email;';
    return user;
  }
  async update() {
    const user = 'name + email;';
    return user;
  }
  async delete() {
    const user = 'name + email;';
    return user;
  } */
}
