const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para multiplicar', () => {
 
    test('POST /api/multiplicar - deve multiplicar dois números', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 2, num2: 2 });
 
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 4})
    })
})