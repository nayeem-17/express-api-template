import express, { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';

/* GET home page. */

export class UserRouter {
  private userRouter: Router;
  private controller: UserController;
  private prismaClient: PrismaClient;
  private service: UserService;
  private repository: UserRepository;
  constructor(prismaClient: PrismaClient) {
    this.userRouter = express.Router();
    this.prismaClient = prismaClient;
    this.repository = new UserRepository(this.prismaClient);
    this.service = new UserService(this.repository);
    this.controller = new UserController(this.service);
    // this.routes();
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
