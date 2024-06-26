const app = require('../../index.js');
const request = require('supertest');
let server;

beforeAll((done) => {
    server = app.listen(4000, () => {
        console.log('Servidor iniciado para testes');
        done();
    });
});

afterAll((done) => {
    server.close(() => {
        console.log('Servidor encerrado após os testes');
        done();
    });
});

describe('Teste de api para o ExercicioController', () => {
    test('Post/subtrair deve retornar a subtração de dois números', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 2, num2: 1 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 1 });
    });
});
describe('Teste de api para o ExercicioController', () => {
    test('Post/subtrair deve retornar a subtração de dois números negativos', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: -30, num2: -15 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -15 });
    });
    
});

describe('Teste de api para o ExercicioController', () => {
    test('Post/subtrai deve retornar a mensagem de erro quando insirir uma letra', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 'a', num2: -5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: "Somente permitido números" });
    });
    
});