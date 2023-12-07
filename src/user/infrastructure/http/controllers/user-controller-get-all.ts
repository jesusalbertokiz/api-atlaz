import { Request, Response } from "express";
import { UserGetAll } from "src/user/aplication/user-get-all";
import { UserNotFound } from "../../../domain/user-not-found";

export class UserControllerGetAll {
  constructor(private readonly userGetAll: UserGetAll) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.userGetAll.run();
      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json();
      }
      return res.status(500).json(error);
    }
  }
}
