import { Request, Response } from 'express';
import cloudinary from 'cloudinary';

const storage = (): void => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
};

const apiSearch = async (data: any) => {
  storage();
  let result = await cloudinary.v2.api.resources(data);
  result = result.resources.map((item: any) => (item.secure_url));
  return result;
};

const searchController = (req: Request, res: Response):void => {
  apiSearch({
    type: 'upload',
    prefix: 'gallery',
  }).then((data) => res.status(200).json(data));
};

export default searchController;
