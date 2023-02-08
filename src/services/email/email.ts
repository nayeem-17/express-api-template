import nodemailer, { SentMessageInfo } from 'nodemailer';
import { MailConfig } from './mailconfig';
class Mailer {
  public config: MailConfig;

  constructor() {
    this.config = this.configure();
  }
  private configure(): MailConfig {
    let mailConfig: MailConfig;
    const senderMail: string = process.env.EMAIL_ID || '';
    const emailPass: string = process.env.EMAIL_PASS || '';
    if (process.env.NODE_ENV === 'DEV') {
      // testing with gmail account

      mailConfig = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: senderMail,
          pass: emailPass,
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
    return mailConfig;
  }
  public sendMail = (
    RECEIVER_EMAIL: string,
    subject: string,
    body: any,
    links: any = null,
  ) => {
    const senderMail: string = process.env.EMAIL_ID || '';
    const transporter = nodemailer.createTransport(this.config);

    transporter.sendMail(
      {
        from: senderMail,
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
}

export default Mailer;
