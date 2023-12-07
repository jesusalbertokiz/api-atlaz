import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import { config } from "./config";
import { userRouter } from "./user/infrastructure/http/user-router";
import { authRouter } from "./auth/infrastructure/http/auth-router";
import { postRouter } from "./posts/infrastructure/http/post-router";
import { comentariosRouter } from "./comentarios/infrastructure/http/comentarios-router";

function boostrap() {
  const app = express();
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/post", postRouter);
  app.use("/comentarios", comentariosRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
