import { createPool, Pool } from "mysql2/promise";

export async function connect(): Promise<Pool> {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "atlaz_api",
    port: 3010,
    connectionLimit: 10,
  });
  return connection;
}
