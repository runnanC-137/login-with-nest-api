import { User } from 'src/entities/user-entities';

export abstract class UserRepository {
  abstract create: (user: User) => Promise<User>;
  abstract read: (userId: string) => Promise<User>;
  abstract readAll: () => Promise<User[]>;
  abstract readByEmail: (email: string) => Promise<User>;
  /*findByEmail: (email: string) => Promise<User | null>
  findAll: () => Promise<User[]>
  findMany: (query: IUserDataQueryProps) => Promise<User[]> */

  abstract update: (user: User) => Promise<User>;
  abstract delete: (userId: string) => Promise<void>;
}
