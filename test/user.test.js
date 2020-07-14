const request = require('supertest');

const app = require('../src/app.js');

test('Deve listar os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });
});

test('Deve inserir novo usuário', () => {
  return request(app).post('/users')
    .send({ name: 'Gabriel', email: 'gabrielgqa@gmail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Gabriel');
    });
});
