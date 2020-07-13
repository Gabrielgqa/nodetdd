const supertest = require('supertest');

const request = supertest('http://localhost:3001');

test('Deve responder na porta 3001', () => {
  // Acessar url http://localhost:3001
  // Verificar que a reposta foi status code 200
  return request.get('/')
    .then((res) => expect(res.status).toBe(200));
});
