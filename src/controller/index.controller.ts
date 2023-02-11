import { IndexService } from '../service/index.service';
import { Request, Response } from 'express';

export class IndexController {
  private service: IndexService;
  constructor() {
    this.service = new IndexService();
  }
  public helloWorld = (req: Request, res: Response) => {
    res.status(200).json({ title: 'Express' });
  };
}
