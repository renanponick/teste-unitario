const request = require('supertest');
const app = require('../../index');

describe('Testando de Api somar', () => {
    test('Post api deve somar dois números', async() =>{
   const response = await request(app)
   .post('/api/somar')
   .send({num1: 5, num2: 2});

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 7});
    });
});
