import IndexRepository from '../database/repository/indexRepository';

const indexRepository = new IndexRepository();
const helloWorld = (req: any, res: any) => {
  res.json({ title: 'Express' });
};
const getManager = async (req: any, res: any) => {
  const { id } = req.params;
  const result = await indexRepository.getManager(id);
  res.json(result.data);
};

export { helloWorld, getManager };
