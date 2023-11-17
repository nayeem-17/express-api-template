import createError, { HttpError } from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

// const swaggerDocument = YAML.load('./swagger.yaml');

import * as dotenv from 'dotenv';

import limiter from './utils/rate.limiter';
import { IndexRouter } from './routes/index.route';
import { AuthRouter } from './routes/auth.route';
import { UserRouter } from './routes/user.route';
import { PrismaClient } from '@prisma/client';
import { Logger } from './utils/logger';

class App {
  public getApp() {
    return this.app;
  }
  private app: express.Application;
  private indexRouter: IndexRouter;
  private authRouter: AuthRouter;
  private userRouter: UserRouter;
  private prismaClient: PrismaClient;
  constructor() {
    this.app = express();
    this.prismaClient = new PrismaClient();
    this.authRouter = new AuthRouter();
    this.indexRouter = new IndexRouter();
    this.userRouter = new UserRouter(this.prismaClient);
    this.setConfig();
    this.setRoutes();
  }
  private setConfig() {
    dotenv.config();
    // if IS_EXPRESS_LOGGER is true, then add this
    if (process.env.EXPRESS_LOGGER) this.app.use(Logger.getExpressLogger);
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(cors());

    this.app.use(limiter);
  }
  private setRoutes() {
    const swaggerDocument = YAML.load('./swagger.yaml');

    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
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
