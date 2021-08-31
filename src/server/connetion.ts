import { Connection, createConnection } from 'typeorm';

const conn = async (): Promise<Connection> => {
  try {
    const db: Connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${process.cwd()}/src/**/entities.js`],
      synchronize: true,
    });
    return db;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to database');
  }
};

export default conn;
