const { Repository } = require("../Repository");

class IndexRepository extends Repository {
    constructor () {
        super();
    }
    getManager = async (param) => {
        const query = `SELECT * from global_name`;
        const params = [param];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = IndexRepository;