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

    test('POST /api/multiplicar - deve retornar erro 400 se num1 não for informado', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num2: 13 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' })
    })

    test('POST /api/multiplicar - deve retornar erro 400 se num2 não for informado', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 12 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser informados' })
    })

    test('POST /api/multiplicar - deve retornar erro 400 se num1 não for um número', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 'doze', num2: 13 });
 
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ message: 'Todos os valores devem ser numéricos' })
    })

})