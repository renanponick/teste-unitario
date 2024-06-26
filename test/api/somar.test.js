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

    test('POST /api/somar - deve retornar erro 400 se num1 não for informado', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num2: 13 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' })
    })

    test('POST /api/somar - deve retornar erro 400 se num2 não for informado', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 12 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' })
    })

    test('POST /api/somar - deve retornar erro 400 se num1 não for um número', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 'doze', num2: 13 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser numéricos' })
    })
})