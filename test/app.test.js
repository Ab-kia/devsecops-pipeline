const request = require('supertest');
const app = require('../src/app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('ok');
});
test('GET /api/items returns a list', async () => {
  const res = await request(app).get('/api/items');
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(2);
});
test('GET /api/items/1 returns the notebook', async () => {
  const res = await request(app).get('/api/items/1');
  expect(res.body.name).toBe('notebook');
});
test('GET /api/items/99 returns 404', async () => {
  const res = await request(app).get('/api/items/99');
  expect(res.status).toBe(404);
});
