import { Connection } from 'oracledb';

import oracledb from 'oracledb';

import { connection, createConnection } from './connectDB';

// require('dotenv').config({ path: '../.env' });
class Repository {
  public _connection: Connection;
  constructor() {
    this._connection = connection;
  }

  query = async (query: string, params: any[]) => {
    console.log(query);
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

    try {
      this._connection = this._connection ?? (await createConnection());
      const data = await this._connection.execute(query);
      return {
        success: true,
        data: data.rows,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };
}

export default Repository;
