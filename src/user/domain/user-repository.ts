import { User } from "./user";

export interface UserRepository {
  getById(id: string, role: string): Promise<boolean>;
  getByName(name: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
}
