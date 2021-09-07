import { Router, Request, Response } from 'express';
import galleryRoutes from '../gallery/url';
import authRouter from '../auth/urls';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'hello world' });
});

// Routes
route.use('/gallery', galleryRoutes);
route.use('/auth', authRouter);

export default route;
