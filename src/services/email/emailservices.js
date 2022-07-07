const { sendMail } = require("./email");

exports.sendVerificationMail = (verification_code, receiver_email) => {

    const email_body = `Dear user, please verify your account. Your verification code is <b> ${verification_code} </b> `;
    try {
        sendMail(receiver_email, 'Verification for Selfish account', email_body);
        return true;
    } catch (err) {
        return false;
    }
}

exports.verificationSuccessEmail = (receiver_email) => {

    const email_body = 'Your account is verified!';
    try {
        sendMail(receiver_email, 'Verification Successful!!!', email_body);
        return true;
    } catch (err) {
        return false;
    }
}

exports.forgotPasswordEmail = (code, receiver_email) => {}