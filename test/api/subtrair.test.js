const app = require('../../index');
const request = require('supertest');

//teste da API
describe('Teste de API para subtrair', () => {

    test('POST /api/subtrair - deve subtrair dois números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 300, num2: 3 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 297 })

    })

    test('POST /api/subtrair - deve retornar código de erro 400 se numero 2 não for informado', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: -1 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Informe os dois números para a subtração' })

    })

    test('POST /api/subtrair - deve retornar código de erro 400 se numero 1 não for informado', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num2: -1 });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Informe os dois números para a subtração' })

    })

    test('POST /api/subtrair - deve retornar código de erro 400 se algum dos campos forem preenchidos com algo diferente de números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 'g', num2: 3});

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Informe apenas números' })

    })
})
