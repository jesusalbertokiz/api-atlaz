import { AuthRepository } from "../domain/auth-repository";

export class AuthLogout {
  constructor(private readonly authRepository: AuthRepository) {}
  async run(tkAuth: string | string[]): Promise<string> {
    try {
      const auth = await this.authRepository.getLogout(tkAuth);
      return auth;
    } catch (error) {
      // Manejar el error de acuerdo a la lógica de negocio
      throw new Error("Error al realizar el logout: " + error);
    }
  }
}
