import { config } from "../../config";
import { UserFindById } from "../aplication/user-find-by-id";
import { UserRepository } from "../domain/user-repository";
import { UserController } from "./http/user-controller";
import { MySQLUserRepository } from "./user-repository/mysql-user-repository";

const getUserRepository = (): UserRepository => {
  switch (config.databaseUser) {
    case "mySQL":
      return new MySQLUserRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const userFindById = new UserFindById(getUserRepository());

export const userController = new UserController(userFindById);
