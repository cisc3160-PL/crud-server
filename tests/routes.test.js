const server = require('../src');
const request = require('supertest');

describe('Test public routes', () =>
{
    it("should respond with a 200 response and a 'CRUD Microservice Server' body in / route", async () =>
    {
        return request(server).get('/').expect(200, 'CRUD Microservice Server');
    });
});