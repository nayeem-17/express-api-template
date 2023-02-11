import { Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user/user.dto';
import { UserMapper } from '../dto/user/user.mapper';
export class UserController {
  private service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }
  public getUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id) as number;
    this.service
      .getUser(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  public createUser = (req: Request, res: Response) => {
    console.log(this == null);
    const user = req.body as UserDto;
    this.service
      .createUser(UserMapper.toUser(user))
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log('error occurred controller ' + typeof err.message);
        res.status(500).json(err.message);
      });
  };
  public updateUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id) as number;
    const user = req.body as UserDto;
    user.id = id;
    this.service
      .createUser(UserMapper.toUser(user))
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  };
  public deleteUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id) as number;
    this.service
      .deleteUser(id)
      .then((data) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}
