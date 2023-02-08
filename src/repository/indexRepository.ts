class IndexRepository {
  // constructor() {
  //   super();
  // }
  public getManager = async (param: string) => {
    const query = `SELECT * from global_name`;
    const params = [param];
    // const result = await this.query(query, params);
    return;
  };
}

export default IndexRepository;
