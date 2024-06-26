const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para subtrair', () => {
 
    test('POST /api/subtrair - deve subtrair dois números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 14, num2: 13 });
 
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 1})
    })
})