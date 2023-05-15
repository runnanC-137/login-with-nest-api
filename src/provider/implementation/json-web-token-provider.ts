import jwt from 'jsonwebtoken';
import { TokenProvider } from '../token-provider';
export class JsonWebTokenProvider implements TokenProvider {
  createToken(payload: object): string {
    const token = jwt.sign(payload, 233, { expiresIn: 3434 });
    return token;
  }

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, 233);
      return {
        payload: { decoded, error: false },
      };
    } catch (error: any) {
      return {
        payload: { decoded: null, error },
      };
    }
  }
}
