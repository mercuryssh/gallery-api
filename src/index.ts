import app from './server/app';
import conn from './server/connetion';

const bootstrap = async () => {
  await conn();
  app.listen(app.get('port'));
};

bootstrap();
