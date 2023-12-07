import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("tkauth");
  if (!token) return res.status(401).json("Acceso denegado");
  const payload = jwt.verify(token, config.SECRETJWT);
  if (!payload) {
    return res.status(401).json("Token inválido");
  }
  next();
};
