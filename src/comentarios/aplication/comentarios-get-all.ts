import { Comentarios } from "../domain/comentarios";
import { ComentariosRepository } from "../domain/comentarios-repository";
import { ComentariosFail } from "../domain/comentarios-fail";

export class ComentariosGetAll {
  constructor(private readonly comentariosRepository: ComentariosRepository) {}

  async run(idPost: string): Promise<Comentarios[] | null> {
    const comentarios = await this.comentariosRepository.getAll(idPost);
    if (!comentarios) {
      throw new ComentariosFail();
    }
    return comentarios;
  }
}
