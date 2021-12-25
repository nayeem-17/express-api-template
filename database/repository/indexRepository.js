const { Repository } = require("../Repository");

class IndexRepository extends Repository {
    constructor () {
        super();
    }
    getManager = async (param) => {
        const query = `SELECT manager_id, department_id, department_name
        FROM departments
        WHERE manager_id = :id`;
        const params = [param];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = IndexRepository;