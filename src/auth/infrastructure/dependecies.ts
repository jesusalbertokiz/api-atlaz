import { config } from "../../config";
import { AuthLogin } from "../aplication/auth-login";
import { AuthRepository } from "../domain/auth-repository";
import { AuthLoginController } from "./http/controllers/auth-login-controller";
import { MySQLAuthRepository } from "./auth-repository/mysql-auth-repository";
import { AuthLogout } from "../aplication/auth-logout";
import { AuthLogoutController } from "./http/controllers/auth-logout-controller";

const getAuthRepository = (): AuthRepository => {
  switch (config.databaseUser) {
    case "mySQL":
      return new MySQLAuthRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const authRepository = getAuthRepository(); // Llamar a la función para obtener el AuthRepository
const authLogin = new AuthLogin(authRepository);
const authLogout = new AuthLogout(authRepository);

export const authLoginController = new AuthLoginController(authLogin);
export const authLogoutController = new AuthLogoutController(authLogout);
