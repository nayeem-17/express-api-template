import Mailer from './email';
import sendMail from './email';

// import { sendMail } from './email';
class EmailService {
  public mail: Mailer;
  constructor() {
    this.mail = new Mailer();
  }
  public sendVerificationMail = (
    verification_code: number,
    receiver_email: string,
  ) => {
    const email_body = `Dear user, please verify your account. Your verification code is  ${verification_code}`;
    try {
      this.mail.sendMail(
        receiver_email,
        'Verification for Selfish account',
        email_body,
      );
      return true;
    } catch (err) {
      return false;
    }
  };

  public verificationSuccessEmail = (receiver_email: string) => {
    const email_body = 'Your account is verified!';
    try {
      this.mail.sendMail(
        receiver_email,
        'Verification Successful!!!',
        email_body,
      );
      return true;
    } catch (err) {
      return false;
    }
  };
}

// exports.forgotPasswordEmail = (code, receiver_email) => {}
export default EmailService;
