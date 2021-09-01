import { config } from 'dotenv';
import conn from '../server/connetion';
import Authentications from './entities';

config();
describe('Authentications Todo', () => {
  it('Find object', async () => {
    await conn();
    Authentications.find();
  });
});
