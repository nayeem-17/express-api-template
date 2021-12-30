const oracledb = require('oracledb');
const { connection, createConnection } = require('./connectDB');
require('dotenv').config({ path: '../.env' });
class Repository {
    constructor () {
        this.connection = connection;
    }

    query = async function (query, params) {
        console.log(query);
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

        if (!this.connection)
            this.connection = await createConnection();
        // console.log(this.connection);
        try {
            const data = await this.connection.execute(query);
            return {
                success: true,
                data: data.rows
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                error
            }
        }
    }

}

exports.Repository = Repository;