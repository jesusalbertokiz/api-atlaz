import express from "express";

import {
  userController,
  userControllerFindByName,
  userControllerGetAll,
} from "../dependecies";

const userRouter = express.Router();
userRouter.get("/", userControllerGetAll.run.bind(userControllerGetAll));
userRouter.get("/id/:id", userController.run.bind(userController));
userRouter.get(
  "/name/:name",
  userControllerFindByName.run.bind(userControllerFindByName),
);

export { userRouter };
