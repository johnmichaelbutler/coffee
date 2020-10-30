import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on a successful signup', async () => {
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

it('returns a 400 if the email is invalid or empty', async () => {
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: 'password'
    })
    .expect(400);
  request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: 'password'
    })
    .expect(400);
})

it('returns a 400 if the password is invalid or empty', async () => {
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: 'pa'
    })
    .expect(400);
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: 'passwordpasswordpasswordpasswordpassword'
    })
    .expect(400);
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: ''
    })
    .expect(400);
});

it('returns a 400 if the email is already in use', async () => {
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
})

it('sets a cookie after a successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});