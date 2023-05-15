interface IVerifyToken {
  payload?: any;
}
export abstract class TokenProvider {
  verifyToken: (token: string) => IVerifyToken;
  createToken: (payload: object) => string;
}
