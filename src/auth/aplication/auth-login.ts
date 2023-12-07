import { Auth } from "../domain/auth";
import { AuthFail } from "../domain/auth-fail";
import { AuthRepository } from "../domain/auth-repository";

export class AuthLogin {
  constructor(private readonly authRepository: AuthRepository) {}

  async run(email: string, pass: string): Promise<Auth> {
    const auth = await this.authRepository.getLogin(email, pass);

    if (!auth) {
      throw new AuthFail();
    }

    return auth;
  }
}
