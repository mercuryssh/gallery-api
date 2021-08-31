import { Connection, createConnection } from 'typeorm';
import Clients from '../clients/entities';

const conn = async (): Promise<Connection> => {
  try {
    const connetion: Connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: ['src/**/entities.ts'],
      synchronize: true,
    });
    return connetion;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to database');
  }
};

export default conn;
