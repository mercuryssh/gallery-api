import consola from 'consola';
import app from './server';
import conn from './server/connetion';

const bootstrap = async () => {
  await conn();
  app.listen(app.get('port'), () => consola.start(`server on port ${app.get('port')}`));
};

bootstrap();
