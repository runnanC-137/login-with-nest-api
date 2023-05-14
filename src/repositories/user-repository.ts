import { User } from 'src/entities/user-entities';

export abstract class UserRepository {
  abstract create: (user: User) => Promise<User>;
  abstract findAll: () => Promise<User[]>;
  /* findById: (userId: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
  findAll: () => Promise<User[]>
  findMany: (query: IUserDataQueryProps) => Promise<User[]> */

  /* update: (user: User) => Promise<User>;
  delete: (userId: string) => Promise<void>; */
}
