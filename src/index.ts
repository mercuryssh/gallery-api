import app from './server/app';

const bootstrap = () => {
  app.listen(8000, () => console.log('server on port 8000'));
};

bootstrap();
