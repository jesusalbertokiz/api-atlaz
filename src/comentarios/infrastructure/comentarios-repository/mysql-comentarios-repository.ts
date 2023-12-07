import { Comentarios } from "../../domain/comentarios";
import { ComentariosRepository } from "../../domain/comentarios-repository";

export class MySQLComentariosRepository implements ComentariosRepository {
  async getAll(idPost: string): Promise<Comentarios[] | []> {
    console.log(idPost);

    const comentarios: [] = [];
    return Promise.resolve(comentarios);
  }

  async crearComentario(
    idPost: string,
    idUser: string,
    text: string,
  ): Promise<boolean> {
    console.log(idPost, idUser, text);

    const comentarios = true;
    return Promise.resolve(comentarios);
  }

  async editarComentario(
    id: string,
    idUser: string,
    text: string,
  ): Promise<boolean> {
    console.log(id, idUser, text);
    const comentarios = true;
    return Promise.resolve(comentarios);
  }

  async eliminarComentario(id: string, idUser: string): Promise<boolean> {
    console.log(id, idUser);
    const comentarios = true;
    return Promise.resolve(comentarios);
  }
}
