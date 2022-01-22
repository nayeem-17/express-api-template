import { Connection, createPool } from 'oracledb';
// require('dotenv').config({ path: '../.env' });
let connection: Connection;
const createConnection = async () => {
  try {
    const pool = await createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });
    console.log('Database connected');
    return pool.getConnection();
  } catch (error) {
    console.log('error occurred while connecting to database' + error);
    console.error(error);
  }
};

export { createConnection, connection };
