import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

interface IPayload {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("auth");
  if (!token) return res.status(401).json("Acceso denegado");
  const payload = jwt.verify(token, config.SECRETJWT) as IPayload;

  if (!payload) {
    return res.status(401).json("Token inválido");
  }
  req.role = payload.role;
  req.idUser = payload.id;

  next();
};
