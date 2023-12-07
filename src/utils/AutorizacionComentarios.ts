import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

interface IPayload {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export const AutorizacionComentarios = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("tkauth");
  if (!token) return res.status(401).json("Accion denegado");
  const payload = jwt.verify(token, config.SECRETJWT) as IPayload;

  req.role = payload.role;
  req.idUser = payload.id;

  next();
};
