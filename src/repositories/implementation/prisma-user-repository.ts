import { User } from 'src/entities/user-entities';
import { PrismaService } from '../../database/prisma.service';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  private prisma = new PrismaService();
  async create(user: User): Promise<User> {
    const savedUserInPrisma = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return savedUserInPrisma;
  }
  async read(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }
  async readByEmail(email?: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return user;
  }
  async readAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async update(user: User): Promise<User> {
    const { name, id } = user;
    const users = await this.prisma.user.update({
      where: { id },
      data: {
        name,
      },
    });
    return users;
  }
  async delete(userId: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
