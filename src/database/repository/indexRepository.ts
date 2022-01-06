import Repository from '../Repository';

class IndexRepository extends Repository {
  constructor() {
    super();
  }
  getManager = async (param: string) => {
    const query = `SELECT * from global_name`;
    const params = [param];
    const result = await this.query(query, params);
    return result;
  };
}

export default IndexRepository;
