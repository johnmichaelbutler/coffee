import request from 'supertest';
import { app } from '../../app';

it('returns a 200 upon successful signin', async () => {
  await global.signin();
  request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);
});

it('returns a 400 if user cannot be found', async () => {
  request(app)
  .post('/api/users/signin')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(400);
})

it('returns a 400 if passwords do not match', async () => {
  await global.signin();
  request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'passwords'
    })
    .expect(400);
})

it('response with a cookie when given valid credentials', async () => {
  await global.signin();
  const response = await request(app)
  .post('/api/users/signin')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
})