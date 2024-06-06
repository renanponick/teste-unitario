const app = require('../../src/app')
const request = require('supertest')

describe('Teste de API para ExercicioController - Função multiplicar', () => {
    it('POST /multiplicar deve retornar a multiplicação de dois números', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 10, num2: 5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 50 });
    })

    it('POST /multiplicar deve retornar a multiplicação de um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: -4, num2: 2 });
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -8 });
    })

    it('POST /multiplicar com a multiplicação de uma letra e um número deve retornar um erro', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 'a', num2: -2 });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao multiplicar" });
    })
})