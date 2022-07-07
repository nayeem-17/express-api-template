const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 45
});

module.exports = limiter