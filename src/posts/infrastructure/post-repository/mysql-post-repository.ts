import { PostRepository } from "../../domain/post-repository";
import { connect } from "./postDatabase";
import { RowDataPacket } from "mysql2";

export class MySQLPostRepository implements PostRepository {
  async getById(id: string): Promise<boolean> {
    const connection = await connect();
    const [rows] = await connection.execute<RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM post WHERE id = ?;",
      [id],
    );

    const count = rows[0].count;

    await connection.end();

    return count > 0;
  }
  async postOwnUser(id: string, idUser: string): Promise<boolean> {
    const connection = await connect();
    const [rows] = await connection.execute<RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM post WHERE id = ? AND idUser = ?;",
      [id, idUser],
    );

    const count = rows[0].count;

    await connection.end();

    return count > 0;
  }
}
