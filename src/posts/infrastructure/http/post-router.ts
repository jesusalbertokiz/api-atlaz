import express from "express";

import { postControllerFindById } from "../dependecies";
import { validateToken } from "../../../utils/validateToken";

const postRouter = express.Router();
postRouter.get(
  "/id/:id",
  validateToken,
  postControllerFindById.run.bind(postControllerFindById),
);

export { postRouter };
