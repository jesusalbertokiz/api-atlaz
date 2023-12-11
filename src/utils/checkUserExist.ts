import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";

interface User {
  id: string;
  role: string;
}

const fetchUser = async (id: string, role: string): Promise<boolean> => {
  const url = `http://localhost:3000/users/id`;
  const data: User = { id, role };

  try {
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.status === 200;
  } catch (error) {
    console.log(error);

    return false;
  }
};

export const CheckUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userExisted = await fetchUser(req.idUser, req.role);
  if (!userExisted) return res.status(401).json("Usuario no existe");
  next();
};
