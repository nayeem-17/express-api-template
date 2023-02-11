import { NextFunction, Response } from 'express';

import jwt from 'jsonwebtoken';
import { AuthenticationService } from './authentication.service';
export class AuthenticationMiddleware {
  public login = async (req: any, res: any, next: NextFunction) => {
    const { username, password } = req.body;
    // Fetching userData from database
    const userInfo: any = '';

    const hashPass: string = userInfo[0].password;

    //  Add more info if needed

    const { userId, email } = userInfo[0];

    if (hashPass && AuthenticationService.isPasswordValid(hashPass, password)) {
      req.body = {
        userId: userId,
        username: username,
        email: email,
      };
      next();
    } else {
      res.status(400).send({ errors: ['Invalid email or password'] });
    }
  };
  public isValidJWTToken = (req: any, res: Response, next: NextFunction) => {
    const SECRET_KEY: string = process.env.SECRET_KEY || '';
    if (req.headers['authorization']) {
      try {
        const authorization = req.headers['authorization'].split(' ');
        if (authorization[0] != 'Bearer') {
          return res.status(401).json({});
        } else {
          const userData: any = jwt.verify(authorization[1], SECRET_KEY);
          //    add necessary data to request body. Here i added only userId
          req.body.userId = userData?.userId;
          next();
        }
      } catch (err) {
        return res.status(403).send();
      }
    } else {
      return res
        .status(401)
        .send({ error: 'Please attach access token in headers.' });
    }
  };
}
