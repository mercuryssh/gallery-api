import { config } from 'dotenv';
import request from 'supertest';
import app from '../server';

config();
describe('Authentications Todo', () => {
  it('Signup Auth', (done) => {
    request(app)
      .post('/auth/signup')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({ password: 'Stronge_Password4444', email: 'auth@test.com' })
      .expect(200, done);
  });

  it('Signup get 400', (done) => {
    request(app)
      .post('/auth/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({ password: 'pass', email: 'mashuMS@gmail.com' })
      .expect(200, done);
  });
});
