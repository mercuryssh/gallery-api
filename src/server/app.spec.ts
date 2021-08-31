import request from 'supertest';
import app from './app';

describe('Todos Api', () => {
  it('shoud run', () => request(app).get('/').expect('Content-type', /json/).expect(200));
});
