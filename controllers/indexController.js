const IndexRepository = require("../database/repository/indexRepository");
const indexRepository = new IndexRepository();
module.exports.helloWorld = (req, res, next) => {
    res.json({ title: 'Express' });
}
exports.getManager = async (req, res, next) => {
    const { id } = req.params;
    const result = await indexRepository.getManager(id);
    res.json(result.data);
}