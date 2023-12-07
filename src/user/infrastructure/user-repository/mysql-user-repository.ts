import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { data } from "./userDatabase";

export class MySQLUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    const rawUser = data.find(user => user.id === id);
    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }
  async getByName(name: string): Promise<User | null> {
    const rawUser = data.find(user => user.name === name);
    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }

  async getAll(): Promise<User[] | null> {
    const users: User[] = data.map(user => new User(user.id, user.name));
    return users.length > 0 ? users : null;
  }
}
