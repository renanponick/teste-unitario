const request = require('supertest');
const app = require('../../index');

describe('Testando de Api subtrair', () => {
    test('Post api deve subtrair dois números', async() =>{
   const response = await request(app)
   .post('/api/subtrair')
   .send({num1: 7, num2: 2});

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5});
    });
});
