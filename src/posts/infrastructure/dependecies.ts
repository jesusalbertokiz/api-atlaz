import { config } from "../../config";
import { PostFindById } from "../aplication/post-find-by-id";
import { PostRepository } from "../domain/post-repository";
import { PostControllerFindById } from "./http/controllers/post-controller-find-by-id";
import { MySQLPostRepository } from "./post-repository/mysql-post-repository";
import { PostPostOwnUser } from "../aplication/post-post-own-user";
import { PostControllerPostOwnUser } from "./http/controllers/post-controller-post-own-user";

const getPostRepository = (): PostRepository => {
  switch (config.databasePost) {
    case "mySQL":
      return new MySQLPostRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const repository = getPostRepository();

const postFindById = new PostFindById(repository);
const postPostOwnUser = new PostPostOwnUser(repository);

export const postControllerFindById = new PostControllerFindById(postFindById);
export const postControllerPostOwnUser = new PostControllerPostOwnUser(
  postPostOwnUser,
);
