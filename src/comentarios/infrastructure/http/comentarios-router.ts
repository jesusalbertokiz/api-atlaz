import express from "express";
import { comentariosControllerGetALL } from "../dependecies";
import { validateToken } from "../../../utils/validateToken";
import { CheckUserExist } from "../../../utils/checkUserExist";

const comentariosRouter = express.Router();

comentariosRouter.post(
  "/post/:idPost",
  validateToken,
  CheckUserExist,
  comentariosControllerGetALL.run.bind(comentariosControllerGetALL),
);

export { comentariosRouter };
