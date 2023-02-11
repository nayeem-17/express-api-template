import createError, { HttpError } from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// const swaggerDocument = YAML.load('./swagger.yaml');

import * as dotenv from 'dotenv';

import limiter from './utils/rate.limiter';
import { IndexRouter } from './routes/index.route';
import { AuthRouter } from './routes/auth.route';
import { SwaggerConfig } from './config/swagger.config';
import swaggerJSDoc from 'swagger-jsdoc';
import { UserRouter } from './routes/user.route';

class App {
  public getApp() {
    return this.app;
  }
  private app: express.Application;
  private indexRouter: IndexRouter;
  private authRouter: AuthRouter;
  private userRouter: UserRouter;
  constructor() {
    this.app = express();
    this.authRouter = new AuthRouter();
    this.indexRouter = new IndexRouter();
    this.userRouter = new UserRouter();
    this.setConfig();
    this.setRoutes();
  }
  private setConfig() {
    dotenv.config();
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(cors());

    this.app.use(limiter);
  }
  private setRoutes() {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'My API',
          version: '1.0.0',
        },
      },
      apis: ['../routes/*ts'],
    };
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerJSDoc(options)),
    );

    this.app.use('/', this.indexRouter.routes());
    this.app.use('/auth', this.authRouter.routes());
    this.app.use('/user', this.userRouter.routes());

    // catch 404 and forward to error handler
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      if (req.originalUrl === '/favicon.ico') {
        return res.status(204).json({ nope: true });
      }
      next(createError(404));
    });

    // error handler
    this.app.use(function (err: HttpError, req: Request, res: Response) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      res.status(err.status || 500);
    });
  }
}
export default new App().getApp();
