import request from 'supertest';
import { app } from '../../app';

it('removes the cookie upon signout', async () => {
  await global.signin();
  const response = await request(app)
    .get('/api/users/signout')
    .send();
  expect(response.get('Set-Cookie')[0]).toEqual('express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly');
})