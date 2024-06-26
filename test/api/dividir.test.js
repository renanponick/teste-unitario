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
    test('Post/ dividir deve retornar a divisão de dois números', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 10, num2: 5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });
});
describe('Teste de api para o ExercicioController', () => {
    test('Post/dividr deve retornar a divisão de dois números negativos', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: -20, num2: -5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 4 });
    });
    
});

describe('Teste de api para o ExercicioController', () => {
    test('Post/dividir deve retornar a mensagem de erro quando insirir uma letra', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 'a', num2: -5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: "Somente permitido números" });
    });
    
});