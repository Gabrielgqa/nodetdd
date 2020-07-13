const request = require('supertest');

const app = require('../src/app.js');

test('Deve listar os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });
});
