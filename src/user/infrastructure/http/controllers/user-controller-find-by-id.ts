import { Request, Response } from "express";

import { UserFindById } from "../../../aplication/user-find-by-id";
import { UserNotFound } from "../../../domain/user-not-found";

export class UserController {
  constructor(private readonly userFindById: UserFindById) {}

  async run(req: Request, res: Response) {
    const { id, role } = req.body;

    try {
      const user = await this.userFindById.run(id, role);

      if (!user) {
        throw new UserNotFound(id);
      }

      return res.status(200);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404);
      }
      console.log(error);

      return res.status(500);
    }
  }
}
