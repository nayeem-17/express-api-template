const jwt = require('jsonwebtoken');
const { isPasswordValid } = require('./authServices');

module.exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    // Fetching userData from database 
    const userInfo = "";

    const hashPass = userInfo[0].password;

    //  Add more info if needed

    const { userId, email } = userInfo[0];

    if (hashPass && isPasswordValid(hashPass, password)) {
        req.body = {
            userId: userId,
            username: username,
            email: email
        }
        next();
    } else {
        res.status(400).send({ errors: ['Invalid email or password'] });
    }
}
module.exports.isValidJWTToken = (req, res, next) => {

    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] != 'Bearer') {
                return res.status(401).json({});
            } else {
                req.jwt = jwt.verify(authorization[1], process.env.JWT_SECRET);
                const userData = jwt.decode(authorization[1], process.env.JWT_SECRET);
                //    add necessary data to request body. Here i added only userId
                req.body.userId = userData.userId;
                next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send({ error: "Please attach access token in headers." });
    }
}