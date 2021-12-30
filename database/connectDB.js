const oracledb = require('oracledb');
require('dotenv').config({ path: '../.env' });
let connection;
module.exports.createConnection = async () => {
    try {
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECTION_STRING
        });
        console.log('Database connected');
        return connection;
    } catch (error) {
        console.log('error occurred while connecting to database' + error);
        console.error(error);
    }
}

module.exports.connection = connection;