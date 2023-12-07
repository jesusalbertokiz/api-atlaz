import { Request, Response } from "express";
import { AuthLogout } from "../../../aplication/auth-logout";

export class AuthLogoutController {
  constructor(private readonly authLogout: AuthLogout) {}

  async run(req: Request, res: Response) {
    try {
      const tkAuth = req.headers.tkauth;

      if (typeof tkAuth === "undefined") {
        throw new Error("tkAuth is undefined");
      }

      const tk = await this.authLogout.run(tkAuth);
      if (!tk) {
        return res.status(400).json("Logouted Fail");
      }
      return res.status(200).json("Logouted");
    } catch (error) {
      // Manejar el error de acuerdo a la lógica de negocio
      return res.status(500).json("Internal Server Error: " + error);
    }
  }
}
