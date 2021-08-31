import express from 'express';
import path from 'path';
import morgan from 'morgan';
import route from './url';

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use(route);

export default app;
