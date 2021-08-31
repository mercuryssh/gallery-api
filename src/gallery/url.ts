import { Router } from 'express';
import searchController from './api';

const route = Router();

route.get('/', searchController);

export default route;
