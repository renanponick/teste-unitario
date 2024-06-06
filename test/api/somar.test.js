const app = require('../../src/app')
const request = require('supertest')

describe('Teste de API para ExercicioController - Função Somar', () => {
    it('POST /somar deve retornar a soma de dois números', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 1, num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 3 });
    })

    it('POST /somar deve retornar a soma de um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 1, num2: -2 });
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -1 });
    })

    it('POST /somar com a soma de uma letra e um número deve retornar um erro', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 'a', num2: -2 });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao somar" });
    })
})