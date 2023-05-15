import { BcryptJsProvider } from './bcrypt-js-provider';
import { JsonWebTokenProvider } from './json-web-token-provider';

export const hashProvider = new BcryptJsProvider();
export const tokenProvider = new JsonWebTokenProvider();
