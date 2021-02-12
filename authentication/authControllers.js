const jwt = require('jsonwebtoken')

module.exports.getAccessToken = async (req, res) => {
    const data = req.body;
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res
        .json({
            access_token: token
        })
        .status(200);
}