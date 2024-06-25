const request = require('supertest');
const app = require('../../index');

describe('Testando de Api dividir', () => {
    test('Post api deve multiplicar dois números', async() =>{
   const response = await request(app)
   .post('/api/multiplicar')
   .send({num1: 2, num2: 4});

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 8});
    });
});
