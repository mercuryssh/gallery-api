import request from 'supertest';
import app from './index';
import conn from './connetion';

describe('Todos Api', () => {
  it('shoud run', () => request(app)
    .get('/').expect('Content-type', /json/)
    .expect(200));

  it('shoud database connection', async () => {
    await conn();
  });
});
