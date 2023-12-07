import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { config } from "../../../../config";
import { AuthLogin } from "../../../aplication/auth-login";
import { AuthFail } from "../../../domain/auth-fail";

export class AuthLoginController {
  constructor(private readonly authLogin: AuthLogin) {}

  async run(req: Request, res: Response) {
    const { email, pass } = req.body;

    try {
      const auth = await this.authLogin.run(email, pass);

      //Creando token
      const token: string = jwt.sign(
        { id: auth.id, name: auth.name, email: auth.email, role: auth.role },
        config.SECRETJWT,
        {
          expiresIn: 60 * 60 * 24,
        },
      );

      return res.status(200).header("auth", token).json(auth);
    } catch (error) {
      if (error instanceof AuthFail) {
        return res.status(400).json("Credenciales invalidas");
      }

      return res.status(500).json();
    }
  }
}
