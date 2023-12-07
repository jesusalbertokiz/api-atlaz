import { Auth } from "./auth";

export interface AuthRepository {
  getLogin(email: string, pass: string): Promise<Auth | null>;
  getLogout(tkAuth: string | string[]): Promise<string>;
}
