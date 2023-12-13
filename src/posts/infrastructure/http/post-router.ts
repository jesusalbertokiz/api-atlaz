import express from "express";

import {
  postControllerFindById,
  postControllerPostOwnUser,
} from "../dependecies";
import { validateToken } from "../../../utils/validateToken";

const postRouter = express.Router();
postRouter.get(
  "/id/:id",
  postControllerFindById.run.bind(postControllerFindById),
);

postRouter.get(
  "/own/:id",
  validateToken,
  postControllerPostOwnUser.run.bind(postControllerPostOwnUser),
);

export { postRouter };
