import { Auth } from "../../domain/auth";
import { AuthRepository } from "../../domain/auth-repository";
import { data } from "./authDatabase";

export class MySQLAuthRepository implements AuthRepository {
  async getLogin(email: string, pass: string): Promise<Auth | null> {
    const rawAuth = data.find(
      user => user.email === email && user.pass === pass,
    );

    return rawAuth
      ? new Auth(rawAuth.id, rawAuth.name, rawAuth.email, rawAuth.role)
      : null;
  }
  async getLogout(tkAuth: string | string[]): Promise<string> {
    const logouted = "Hasta luego" + tkAuth;
    return Promise.resolve(logouted);
  }
}
