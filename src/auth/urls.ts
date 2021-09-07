import { Router } from 'express';
import authMiddleware from './middleware';
import { signupController, loginController } from './controllers';

const route = Router();

route.post('/signup', authMiddleware, signupController);
route.post('/login', authMiddleware, loginController);

export default route;
