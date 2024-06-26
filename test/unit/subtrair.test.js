const Service = require('../../src/services/service');

describe('Teste da função para subtrair', () => {
    let service;
    beforeAll(() => {
        service = new Service();
    });

    test('deve subtrair dois números', async () => {
        const result = service.Subtrair(2, 2);
        expect(result).toBe(0);

    })
    test('deve subtrair um número positivo e outro negativo', async () => {
        const result = service.Subtrair(-2, 2);
        expect(result).toBe(-4);

    })

    test('deve subtrair dois números negativos ', async () => {
        const result = service.Subtrair(-2, -2);
        expect(result).toBe(0);


    })

    test('deve subtrair zero e outro número', async () => {
        const result = service.Subtrair(2, 2);
        expect(result).toBe(0);

    })
})