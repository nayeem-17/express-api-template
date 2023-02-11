import { Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user/user.dto';
import { UserMapper } from '../dto/user/user.mapper';
import { Controller, Get, Res, Route } from 'tsoa';
@Route('user')
export class UserController {
  private service: UserService;
  constructor() {
    this.service = new UserService();
  }
  @Get()
  public getUser(req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id) as number;
    this.service
      .getUser(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
  public createUser(req: Request, res: Response) {
    const user = req.body as UserDto;
    this.service
      .createUser(UserMapper.toUser(user))
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
  public updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id) as number;
    const user = req.body as UserDto;
    user.id = id;
    this.service
      .createUser(UserMapper.toUser(user))
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
  public deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id) as number;
    this.service
      .deleteUser(id)
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}
