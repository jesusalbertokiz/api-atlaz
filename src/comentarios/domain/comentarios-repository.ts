import { Comentarios } from "./comentarios";

export interface ComentariosRepository {
  getAll(idPost: string): Promise<Comentarios[] | []>;
  crearComentario(
    idPost: string,
    idUser: string,
    text: string,
  ): Promise<boolean>;
  editarComentario(id: string, idUser: string, text: string): Promise<boolean>;
  eliminarComentario(id: string, idUser: string): Promise<boolean>;
}
