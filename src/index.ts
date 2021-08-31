import app from './server/app';

const bootstrap = () => {
  app.listen(app.get('port'));
};

bootstrap();
