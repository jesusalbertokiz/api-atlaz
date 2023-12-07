import { config } from "../../config";
import { PostFindById } from "../aplication/post-find-by-id";
import { PostRepository } from "../domain/post-repository";
import { PostControllerFindById } from "./http/controllers/post-controller-find-by-id";
import { MySQLPostRepository } from "./post-repository/mysql-post-repository";

const getPostRepository = (): PostRepository => {
  switch (config.databasePost) {
    case "mySQL":
      return new MySQLPostRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const userFindById = new PostFindById(getPostRepository());

export const postControllerFindById = new PostControllerFindById(userFindById);
