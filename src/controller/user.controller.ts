import { Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user/user.dto';
import { UserMapper } from '../dto/user/user.mapper';
export class UserController {
  private service: UserService;
  constructor() {
    this.service = new UserService();
  }

  public getUser(req: Request, res: Response) {
    this.service
      .getUser(req.body.userId)
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
  public deleteUser(req: Request, res: Response) {
    this.service
      .deleteUser(req.body.userId)
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}
