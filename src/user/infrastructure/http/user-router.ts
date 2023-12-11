import express from "express";

import { userController } from "../dependecies";

const userRouter = express.Router();

userRouter.post("/id", userController.run.bind(userController));

export { userRouter };
