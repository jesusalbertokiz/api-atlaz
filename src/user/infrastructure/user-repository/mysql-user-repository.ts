import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { connect } from "./userDatabase";
import { RowDataPacket } from "mysql2";

export class MySQLUserRepository implements UserRepository {
  async getById(id: string, role: string): Promise<boolean> {
    const connection = await connect();
    const [rows] = await connection.execute<RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM usuarios WHERE id = ? AND role = ?",
      [id, role],
    );

    const count = rows[0].count;

    await connection.end();

    return count > 0;
  }
  async getByName(name: string): Promise<User | null> {
    console.log(name);
    return null;
  }

  async getAll(): Promise<User[] | null> {
    return null;
  }
}
