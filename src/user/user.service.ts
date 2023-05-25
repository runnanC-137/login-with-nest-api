import { Injectable } from '@nestjs/common';
import { User } from '../entities/user-entities';
import { IUser } from './interfaces/user.interface';
import { UserRepository } from '../repositories/user-repository';
import { HashProvider } from '../provider/hash-provider';
import { CreateUserRequestBody } from './dto/create-user-request-body';
import { ReadUserRequestParam } from './dto/read-user-request-body';
import { UpdateUserRequestBody } from './dto/update-user-request-body';
import { DeleteUserRequestBody } from './dto/delete-user-request-body';
import { UpdateUserPasswordRequestBody } from './dto/update-user-password-request-body';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
  ) {}

  async create(data: CreateUserRequestBody): Promise<IUser> {
    const userAlreadyExit = await this.userRepository.readByEmail(data.email);
    if (userAlreadyExit != null) {
      throw new Error('user already exit');
    }
    const userData = new User(data);
    const hashPassword = this.hashProvider.hashPassword(data.password);
    userData.password = hashPassword;
    const user = await this.userRepository.create(userData);
    return {
      password: undefined,
      ...user.data,
    };
  }

  async read({ id }: ReadUserRequestParam): Promise<IUser> {
    const user = await this.userRepository.read(id);
    if (!user) {
      throw new Error('user not exist');
    }
    return {
      password: undefined,
      ...user.data,
    };
  }

  async readAll(): Promise<IUser[]> {
    return (await this.userRepository.readAll()).map((user) => {
      return {
        password: undefined,
        ...user.data,
      };
    });
  }

  async update(data: UpdateUserRequestBody): Promise<IUser> {
    const userExit = await this.userRepository.read(data.id);
    if (!userExit) {
      throw new Error('user not exit');
    }

    if (data.email) {
      const emailAlreadyExit = await this.userRepository.readByEmail(
        data.email,
      );
      if (emailAlreadyExit) {
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
    return {
      password: undefined,
      ...updateUser.data,
    };
  }

  async updatePassword(data: UpdateUserPasswordRequestBody): Promise<void> {
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

  async delete({ id }: DeleteUserRequestBody): Promise<void> {
    const userAlreadyExit = await this.userRepository.read(id);
    if (userAlreadyExit === undefined) {
      throw new Error('user not exist');
    }
    await this.userRepository.delete(id);
  }
}
