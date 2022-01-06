import express, { Router } from 'express';

import { helloWorld, getManager } from '../controllers/index.controller';
const indexRouter: Router = express.Router();

/* GET home page. */
indexRouter.get('/', helloWorld);
indexRouter.get('/get/:id', getManager);

export default indexRouter;
