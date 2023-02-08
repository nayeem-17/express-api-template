import express, { Router } from 'express';
import { IndexController } from '../controllers/index.controller';

/* GET home page. */

export class IndexRouter {
  private indexRouter: Router;
  private controller: IndexController;
  constructor() {
    this.indexRouter = express.Router();
    this.controller = new IndexController();
  }
  /**
   * routes
   */
  public routes(): Router {
    this.indexRouter.get('/', this.controller.helloWorld);
    this.indexRouter.get('/get/:id', this.controller.getManager);
    return this.indexRouter;
  }
}
