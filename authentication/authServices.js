const crypto = require('crypto');

module.exports.makeHash = (password) => {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto
        .createHmac('sha512', salt)
        .update(password)
        .digest('base64');
    hashPassword = salt + "$" + hash;
    return hashPassword;
}

module.exports.isPasswordValid = (hashPassword, password) => {
    let pawsswordField = hashPassword.split('$');
    let salt = pawsswordField[0];
    let hash = crypto
        .createHmac('sha512', salt)
        .update(password)
        .digest('base64');
    if (hash === pawsswordField[1]) {
        return true;
    } else {
        return false;
    }
}

