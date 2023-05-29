import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entities';
import { IUser } from './interfaces/user.interface';
import { UserRepository } from '../repositories/user-repository';
import { HashProvider } from '../provider/hash-provider';
import { CreateUserRequest } from './dtos/create-user-request.dto';
import { ReadUserRequest } from './dtos/read-user-request.dto';
import { UpdateUserRequest } from './dtos/update-user-request.dto';
import { DeleteUserRequest } from './dtos/delete-user-request.dto';
import { UpdateUserPasswordRequest } from './dtos/update-user-password-request.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
  ) {}

  async create(data: CreateUserRequest): Promise<IUser> {
    const emailAlreadyInUse = await this.userRepository.readByEmail(data.email);
    if (!!emailAlreadyInUse) {
      throw new Error('user already exit');
    }
    const userData = new User(data);
    const hashPassword = this.hashProvider.hashPassword(data.password);
    userData.password = hashPassword;
    const user = await this.userRepository.create(userData);
    return user;
  }

  async read({ id }: ReadUserRequest): Promise<IUser> {
    const user = await this.userRepository.read(id);
    if (!user) {
      throw new Error('user not exist');
    }
    return user;
  }

  async readAll(): Promise<IUser[]> {
    return await this.userRepository.readAll();
  }

  async update(data: UpdateUserRequest): Promise<IUser> {
    const userExit = await this.userRepository.read(data.id);
    if (!userExit) {
      throw new Error('user not exit');
    }

    if (data.email) {
      const emailAlreadyExit = await this.userRepository.readByEmail(
        data.email,
      );
      if (!!emailAlreadyExit) {
        throw new Error('user email is already in use');
      }
    }

    const updateUserData = new User({
      id: userExit.id,
      name: data.name ?? userExit.name,
      email: data.email ?? userExit.email,
      updatedAt: new Date(),
    });
    const updateUser = await this.userRepository.update(updateUserData);
    return updateUser;
  }

  async updatePassword(data: UpdateUserPasswordRequest): Promise<void> {
    const userExit = await this.userRepository.read(data.id);

    if (!userExit) {
      throw new Error('user not exit');
    }

    const isPasswordTruth = this.hashProvider.verifyPassword(
      data.password,
      userExit.password,
    );

    if (!isPasswordTruth) {
      throw new Error('password incorrectly');
    }

    const hashPassword = this.hashProvider.hashPassword(data.newPassword);

    const updateUserData = new User({
      id: userExit.id,
      name: userExit.name,
      email: userExit.email,
      password: hashPassword,
    });

    await this.userRepository.updatePassword(updateUserData);
  }

  async delete({ id }: DeleteUserRequest): Promise<void> {
    const userAlreadyExit = await this.userRepository.read(id);
    if (!userAlreadyExit) {
      throw new Error('user not exist');
    }
    await this.userRepository.delete(id);
  }
}
