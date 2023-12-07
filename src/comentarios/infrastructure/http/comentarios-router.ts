import express from "express";
import { comentariosControllerGetALL } from "../dependecies";
import { validateToken } from "../../../utils/validateToken";

const comentariosRouter = express.Router();

comentariosRouter.get(
  "/post/:idPost",
  validateToken,
  comentariosControllerGetALL.run.bind(comentariosControllerGetALL),
);

export { comentariosRouter };
