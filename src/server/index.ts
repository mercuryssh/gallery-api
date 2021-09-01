import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import route from './url';

if (process.env.NODE_ENV !== 'production') {
  config();
}

const app = express();
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use(route);

export default app;
