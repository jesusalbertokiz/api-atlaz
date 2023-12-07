import { config } from "../../config";
import { ComentariosRepository } from "../domain/comentarios-repository";
import { ComentariosGetAll } from "../aplication/comentarios-get-all";
import { ComentariosControllerGetALL } from "./http/controllers/comentarios-controller-get-all";
import { MySQLComentariosRepository } from "./comentarios-repository/mysql-comentarios-repository";

const getComentariosRepository = (): ComentariosRepository => {
  switch (config.databaseComentarios) {
    case "mySQL":
      return new MySQLComentariosRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const comentariosRepository = getComentariosRepository();
const comentariosGetAll = new ComentariosGetAll(comentariosRepository);

export const comentariosControllerGetALL = new ComentariosControllerGetALL(
  comentariosGetAll,
);
