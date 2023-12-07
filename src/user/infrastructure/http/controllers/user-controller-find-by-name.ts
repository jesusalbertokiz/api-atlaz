import { Request, Response } from "express";
import { UserNotFound } from "../../../domain/user-not-found";
import { UserFindByName } from "src/user/aplication/user-find-by-name";

export class UserControllerFindByName {
  constructor(private readonly userFindByName: UserFindByName) {}

  async run(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const user = await this.userFindByName.run(name);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json();
      }

      return res.status(500).json();
    }
  }
}
