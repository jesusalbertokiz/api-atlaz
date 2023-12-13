export const data = [
  {
    id: "1",
    visibility: "1",
  },
  {
    id: "2",
    visibility: "2",
  },
  {
    id: "3",
    visibility: "3",
  },
  {
    id: "4",
    visibility: "4",
  },
];

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
