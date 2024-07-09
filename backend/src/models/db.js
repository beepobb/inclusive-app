import { createPool } from "mysql2";

import configuration from '../config/config';


// create a connection pool to the mysql database
// this allows us to have mutiple connections from multiple threads to access the database
let pool = createPool(configuration.database).promise();

async function cleanup() {
  await pool.end();
}

export default { pool, cleanup };
