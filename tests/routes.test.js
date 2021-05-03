const server = require('../src/server');
const request = require('supertest');

describe('Test public routes', () =>
{
    it("should respond with a 200 response and a 'Hello World!' body in /api route", async () =>
    {
        return request(server).get('/api').expect(200, 'Hello World!');
    });
});