import IndexRepository from '../repository/indexRepository';

export class IndexController {
  private repository: IndexRepository;
  constructor() {
    this.repository = new IndexRepository();
  }
  public helloWorld = (req: any, res: any) => {
    res.json({ title: 'Express' });
  };
  public getManager = async (req: any, res: any) => {
    // const { id } = req.params;
    // const result = await this.repository.getManager(id);
    // res.json(result.data);
  };
}
