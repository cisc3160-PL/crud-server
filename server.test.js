const app = require('./server');
const request = require('supertest');

describe('Test public routes', () =>
{
    it("should respond with a 200 response and a 'Hello World!' body in / route", async () =>
    {
        return request(app).get('/').expect(200, 'Hello World!');
    });
});