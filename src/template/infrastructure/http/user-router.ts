import express from "express";

import { userController } from "../dependecies";

const userRouter = express.Router();

userRouter.get("/:id", userController.run.bind(userController));

export { userRouter };
