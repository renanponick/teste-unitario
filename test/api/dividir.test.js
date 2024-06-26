const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para dividir', () => {
 
    test('POST /api/dividir - deve dividir dois números', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 10, num2: 2 });
 
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 5})
    })
})