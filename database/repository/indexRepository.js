const { Repository } = require("./Repository");

class IndexRepository extends Repository {
    constructor () {
        super();
    }
    show = async (param) => {
        const query = "";
        const params = [param];
        const result = await this.query(query, params);
        return result;
    }
    create = async (login, password) => {
        const query = "insert into users(login , password) values($1,$2)";
        const params = [login, password];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = IndexRepository;