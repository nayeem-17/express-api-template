const { Repository } = require("./Repository");

class IndexRepository extends Repository {
    constructor() {
        super();
    }
    show = async(param) => {
        const query = "";
        const params = [param];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = IndexRepository;