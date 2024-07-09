import { createPool } from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

// create a connection pool to the mysql database
// this allows us to have mutiple connections from multiple threads to access the database
let pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
  })
  .promise();

async function cleanup() {
  await pool.end();
}

export default { pool, cleanup };