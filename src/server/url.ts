import { Router, Request, Response } from 'express';
import galleryRoutes from '../gallery/url';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'hello world' });
});

// gallery
route.use('/gallery', galleryRoutes);

export default route;
