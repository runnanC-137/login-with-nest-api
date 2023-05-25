import { UserInRequest } from './user-in-request';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: UserInRequest;
}
