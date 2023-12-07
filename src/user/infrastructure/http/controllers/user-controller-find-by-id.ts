import { Request, Response } from "express";

import { UserFindById } from "../../../aplication/user-find-by-id";
import { UserNotFound } from "../../../domain/user-not-found";

export class UserController {
  constructor(private readonly userFindById: UserFindById) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await this.userFindById.run(id);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json();
      }

      return res.status(500).json();
    }
  }
}
