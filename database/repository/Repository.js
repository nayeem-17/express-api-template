const client = require("../connectDB");

class Repository {
    constructor () {
        // If anything needs be done here
    }

    query = async function (query, params) {
        try {
            const data = await client.query(query, params);
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