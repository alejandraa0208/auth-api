const supertest = require('supertest');
const app = require('../src/server');

const request = supertest(app);

describe('AUTH Routes', () => {
  it('POST /signup creates a new user and sends an object with the user and the token to the client', async () => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
      role: 'user',
    };

    const response = await request.post('/signup').send(newUser);


    expect(response.status).toBe(201);

    expect(response.body.user).toBeDefined();
    expect(response.body.user.username).toBe(newUser.username);

   
    expect(response.body.token).toBeDefined();
  });
});
