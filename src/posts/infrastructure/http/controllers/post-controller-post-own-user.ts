import { Request, Response } from "express";

import { PostNotFound } from "../../../domain/post-not-found";
import { PostPostOwnUser } from "../../../aplication/post-post-own-user";

export class PostControllerPostOwnUser {
  constructor(private readonly postOwnUser: PostPostOwnUser) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);

    try {
      const post = await this.postOwnUser.run(id, req.idUser);
      console.log(post);

      return res.status(200).json();
    } catch (error) {
      if (error instanceof PostNotFound) {
        return res.status(404).json("aqui fue");
      }

      return res.status(500).json();
    }
  }
}
