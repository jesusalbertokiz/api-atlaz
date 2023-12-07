import express from "express";

import { authLoginController, authLogoutController } from "../dependecies";
import { validateToken } from "../../../utils/validateToken";
const authRouter = express.Router();

authRouter.post("/login", authLoginController.run.bind(authLoginController));
authRouter.post(
  "/logout",
  validateToken,
  authLogoutController.run.bind(authLogoutController),
);

export { authRouter };
