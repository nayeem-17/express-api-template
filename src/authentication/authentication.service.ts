import crypto from 'crypto';
export class AuthenticationService {
  public static makeHash = (password: string) => {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto
      .createHmac('sha512', salt)
      .update(password)
      .digest('base64');
    const hashPassword = salt + '$' + hash;
    return hashPassword;
  };

  public static isPasswordValid = (hashPassword: string, password: string) => {
    const passwordField = hashPassword.split('$');
    const salt = passwordField[0];
    const hash = crypto
      .createHmac('sha512', salt)
      .update(password)
      .digest('base64');
    if (hash === passwordField[1]) {
      return true;
    } else {
      return false;
    }
  };
}
