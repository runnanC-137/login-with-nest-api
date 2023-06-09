export abstract class HashProvider {
  hashPassword: (password: string) => string;
  verifyPassword: (password: string, hashPassword: string) => boolean;
}
