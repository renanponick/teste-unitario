const request = require('supertest');
const app = require('../../index');

describe('Testando de Api dividir', () => {
    test('Post api deve dividir dois números', async() =>{
   const response = await request(app)
   .post('/api/dividir')
   .send({num1: 2, num2: 2});

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 1});
    });
});
