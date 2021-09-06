import { Connection, createConnection } from 'typeorm';
import path from 'path';

const conn = async (): Promise<Connection> => {
  try {
    const connetion: Connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [path.join(__filename, '../**/entities.ts')],
      synchronize: true,
    });
    return connetion;
  } catch (error) {
    throw new Error('Unable to connect to database');
  }
};

export default conn;
