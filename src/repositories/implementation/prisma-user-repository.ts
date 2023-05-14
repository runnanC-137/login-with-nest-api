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
  async findAll(): Promise<User[]> {
    const users = this.prisma.user.findMany();
    return users;
  }
}
