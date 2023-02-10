export interface MailConfig {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
}
