const oracledb = require('oracledb');
require('dotenv').config({ path: '../.env' });
class Repository {
    constructor () {
        this.connection = null;
        this.isConnected = false;
    }

    query = async function (query, params) {
        console.log(query);
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        try {

            this.connection = await oracledb.getConnection({
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                connectString: process.env.DB_CONNECTION_STRING
            });
            console.log('Database connected');

        } catch (error) {
            console.log('error occurred while connecting to database' + error);
            console.error(error);
        }

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