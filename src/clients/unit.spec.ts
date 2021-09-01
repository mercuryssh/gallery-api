import { config } from 'dotenv';
import conn from '../server/connetion';
import Clients from './entities';

config();
describe('Todo Clients', () => {
  it('Find', async () => {
    await conn();
    Clients.find();
  });
});
