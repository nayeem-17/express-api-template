// logger.ts

import * as winston from 'winston';
import * as expressWinston from 'express-winston';

export class Logger {
  static logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.simple(), // or any other format you prefer
        ),
      }),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  // Create an Express middleware for logging HTTP requests
  private static expressLogger = expressWinston.logger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.simple(), // or any other format you prefer
        ),
      }),
      new winston.transports.File({ filename: 'http.log' }),
    ],
    format: winston.format.combine(
      winston.format.json(),
      winston.format.simple(),
    ),
    // meta: false,
    msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    expressFormat: true,
    colorize: false,
  });
  private static getLogger() {
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      );
      return this.logger;
    }
  }
  static getExpressLogger() {
    return this.expressLogger;
  }
}
