import { Request, Response } from "express";

import { PostFindById } from "../../../aplication/post-find-by-id";
import { PostNotFound } from "../../../domain/post-not-found";

export class PostControllerFindById {
  constructor(private readonly postFindById: PostFindById) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const post = await this.postFindById.run(id);

      return res.status(200).json(post);
    } catch (error) {
      if (error instanceof PostNotFound) {
        return res.status(404).json();
      }

      return res.status(500).json();
    }
  }
}
