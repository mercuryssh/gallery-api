import request from 'supertest';
import app from '../server';

describe('Todo Gallery', () => {
  it('Get all gallery', (done) => {
    request(app)
      .get('/gallery')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
