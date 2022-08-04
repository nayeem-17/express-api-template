const IndexRepository = require("../database/repository/indexRepository");
const { validatePassword } = require("../services/validator");
const indexRepository = new IndexRepository();
module.exports.helloWorld = (req, res, next) => {
    res.json({ title: 'Express' });
}

module.exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(401)
            .json({
                message: "please fill all data"
            })
    }
    if (!validatePassword(password))
        return res
            .status(401)
            .json({
                message: "password not valid"
            })
    const result = await indexRepository.create(username, password);
    if (!result.success) {
        return res
            .status(500)
            .json({
                error: result.error
            })
    }
    res
        .status(200)
        .json({
            result
        });
}
