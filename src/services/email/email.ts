import nodemailer, { SentMessageInfo } from 'nodemailer';
const sendMail = (
  RECEIVER_EMAIL: string,
  subject: string,
  body: any,
  links: any = null,
) => {
  let mailConfig;
  const SENDER_EMAIL = process.env.EMAIL_ID;
  if (process.env.NODE_ENV === 'DEV') {
    // testing with gmail account

    mailConfig = {
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    };
  } else {
    mailConfig = {
      host: 'smtp.yourDomain.email',
      port: 587,
      auth: {
        user: 'mail_id',
        pass: 'mail_pass',
      },
    };
  }

  const transporter = nodemailer.createTransport(mailConfig);

  transporter.sendMail(
    {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: subject,
      text: body,
    },
    (err: Error | null, info: SentMessageInfo): void => {
      if (info) console.log(info);
      if (err) console.log(err);
    },
  );
};

export default sendMail;
