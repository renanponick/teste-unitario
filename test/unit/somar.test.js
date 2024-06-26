const Service = require('../../src/services/service');

describe('Teste da função para somar', () => {
    let service;
    beforeAll(() => {
        service = new Service();
    });

    test('deve somar dois números', async () => {
        const result = service.Somar(2, 2);
        expect(result).toBe(4);
    })

    test('deve somar um número positivo e outro negativo', async () => {
        const result = service.Somar(2,-2);
        expect(result).toBe(0);

    })

    test('deve somar dois números negativos ', async () => {
        const result = service.Somar(-2, -2);
        expect(result).toBe(-4);

    })

    test('deve somar zero e outro número', async () => {
        const result = service.Somar(0, 2);
        expect(result).toBe(2);

    })
})
