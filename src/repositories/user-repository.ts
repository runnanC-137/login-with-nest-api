import { User } from 'src/entities/user.entities';

export abstract class UserRepository {
  abstract create: (user: User) => Promise<User>;
  abstract read: (userId: string) => Promise<User>;
  abstract readAll: () => Promise<User[]>;
  abstract readByEmail: (email: string) => Promise<User>;
  abstract update: (user: User) => Promise<User>;
  abstract updatePassword: (user: User) => Promise<void>;
  abstract delete: (userId: string) => Promise<void>;
}
