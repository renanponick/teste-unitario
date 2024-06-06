const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para somar', () => {
 
    test('POST /api/somar - deve somar dois números', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 12, num2: 13 });
 
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 25})
    })
})