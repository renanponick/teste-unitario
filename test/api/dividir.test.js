const app = require('../../src/app')
const request = require('supertest')

describe('Teste de API para ExercicioController - Função Dividir', () => {
    it('POST /dividir deve retornar a divisão de dois números', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 10, num2: 5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    })

    it('POST /dividir deve retornar a divisão de um número positivo e negativo', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: -4, num2: 2 });
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -2 });
    })

    it('POST /dividir com a divisão de uma letra e um número deve retornar um erro', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 'a', num2: -2 });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao dividir" });
    })

    it('POST /dividir com a divisão de um valor boolean e um número deve retornar um erro', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 5, num2: false });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao dividir" });
    })

    it('POST /dividir com a divisão com os dois números zerados deve retornar 0', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 0, num2: 0 });
    
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao dividir" });
    })
})