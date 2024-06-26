const Service = require('../../src/services/service');

describe('Teste da função para multiplicar', () => {
    let service;
    beforeAll(() => {
        service = new Service();
    });

    test(' deve multiplicar dois números', async () => {
        const result = service.Multiplicar(2, 2);
        expect(result).toBe(4);

    })

    test(' deve multiplicar um número positivo e outro negativo', async () => {
        const result = service.Multiplicar(-2, 2);
        expect(result).toBe(-4);

    })

    test(' deve multiplicar dois números negativos ', async () => {
        const result = service.Multiplicar(-2, -2);
        expect(result).toBe(4);

    })

    test(' deve multiplicar zero e outro número', async () => {
        const result = service.Multiplicar(0, 2);
        expect(result).toBe(0);

    })
})