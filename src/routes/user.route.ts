import express, { Router } from 'express';
import { IndexController } from '../controller/index.controller';
import { UserController } from '../controller/user.controller';

/* GET home page. */

export class UserRouter {
  private userRouter: Router;
  private controller: UserController;
  constructor() {
    this.userRouter = express.Router();
    this.controller = new UserController();
  }
  /**
   * routes
   */
  public routes(): Router {
    this.userRouter.post('/', this.controller.createUser);
    this.userRouter.post('/{id}', this.controller.getUser);
    this.userRouter.post('/{id}', this.controller.updateUser);
    this.userRouter.post('/{id}', this.controller.deleteUser);
    return this.userRouter;
  }
}
