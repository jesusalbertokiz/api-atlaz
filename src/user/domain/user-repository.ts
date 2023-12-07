import { User } from "./user";

export interface UserRepository {
  getById(id: string): Promise<User | null>;
  getByName(name: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
}
