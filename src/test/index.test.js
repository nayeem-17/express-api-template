const request = require('supertest')

const app = require('../app');

describe('given username and password', () => {
    test('should respond with 200', async () => {
        const response = await request(app).post('/create').send({
            "username": "www.google.com",
            "password": "pass355dcvs6sd"
        })
        expect(response.statusCode).toBe(200)
    })
})