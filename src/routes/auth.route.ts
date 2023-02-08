import express, { Router } from 'express';
import { AuthenticationController } from '../authentication/authentication.controllers';
import { AuthenticationMiddleware } from '../authentication/authentication.middleware';

export class AuthRouter {
  private authRouter: Router;
  private authController: AuthenticationController;
  private authMiddleware: AuthenticationMiddleware;
  constructor() {
    this.authRouter = express.Router();
    this.authMiddleware = new AuthenticationMiddleware();
    this.authController = new AuthenticationController();
  }
  public routes(): Router {
    this.authRouter.post(
      '/token',
      this.authMiddleware.login,
      this.authController.getAccessToken,
    );
    return this.authRouter;
  }
}
