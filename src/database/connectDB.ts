import { Connection, getConnection } from 'oracledb';
// require('dotenv').config({ path: '../.env' });
let connection: Connection;
async function createConnection() {
  try {
    const connection = await getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });
    console.log('Database connected');
    return connection;
  } catch (error) {
    console.log('error occurred while connecting to database' + error);
    console.error(error);
  }
}

export { createConnection, connection };
