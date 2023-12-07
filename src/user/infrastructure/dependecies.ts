import { config } from "../../config";
import { UserFindById } from "../aplication/user-find-by-id";
import { UserFindByName } from "../aplication/user-find-by-name";
import { UserGetAll } from "../aplication/user-get-all";
import { UserRepository } from "../domain/user-repository";
import { UserController } from "./http/controllers/user-controller-find-by-id";
import { UserControllerFindByName } from "./http/controllers/user-controller-find-by-name";
import { UserControllerGetAll } from "./http/controllers/user-controller-get-all";
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
const userFindByName = new UserFindByName(getUserRepository());
const userGetAll = new UserGetAll(getUserRepository());

export const userController = new UserController(userFindById);
export const userControllerFindByName = new UserControllerFindByName(
  userFindByName,
);
export const userControllerGetAll = new UserControllerGetAll(userGetAll);
