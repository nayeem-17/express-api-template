const nodemailer = require('nodemailer')
exports.sendMail = (RECEIVER_EMAIL, subject, body, links) => {
    let mailConfig;
    const SENDER_EMAIL = process.env.EMAIL_ID;
    if (process.env.NODE_ENV === 'DEV') {

        // testing with gmail account

        mailConfig = {
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: SENDER_EMAIL,
                pass: process.env.EMAIL_PASS
            }
        };
    } else {
        // all emails are catched by yourdomain
        mailConfig = {
            host: 'smtp.yourdomain.email',
            port: 587,
            auth: {
                user: 'mail_id',
                pass: 'mail_pass'
            }
        };
    }

    const transporter = nodemailer.createTransport(mailConfig);

    transporter.sendMail({
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        subject: subject,
        html: body
    }, (err, info) => {
        if (info)
            console.log(info);
        if (err)
            console.log(err)
    })
}