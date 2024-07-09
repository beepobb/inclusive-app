import { createPool } from "mysql2";

import configuration from '../config/config.js';


// create a connection pool to the mysql database
// this allows us to have mutiple connections from multiple threads to access the database
let db = createPool(configuration.database).promise();

async function cleanup() {
  await db.end();
}

export { db, cleanup };
