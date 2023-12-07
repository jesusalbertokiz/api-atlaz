import { Request, Response } from "express";
import { ComentariosGetAll } from "../../..//aplication/comentarios-get-all";

export class ComentariosControllerGetALL {
  constructor(private readonly comentariosGetAll: ComentariosGetAll) {}

  async run(req: Request, res: Response) {
    const { idPost } = req.params;
    const comentarios = await this.comentariosGetAll.run(idPost);
    res.json(comentarios);
  }
}
