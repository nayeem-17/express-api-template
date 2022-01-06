import express from 'express';
import getAccessToken from '../authentication/authentication.controllers';
import { login } from '../authentication/authentication.middleware';

const authRouter = express.Router();

authRouter.post('/token', login, getAccessToken);

export default authRouter;
