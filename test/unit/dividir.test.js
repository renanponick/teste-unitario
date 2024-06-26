const Service = require('../../src/services/service');

describe('Teste da função para dividir', () => {
    let service;
    beforeAll(() => {
        service = new Service();
    });

    test(' deve dividir dois números', async () => {
        const result = service.Dividir(2, 2);
        expect(result).toBe(1);

    })

    test(' deve dividir um número positivo e outro negativo', async () => {
        const result = service.Dividir(-2, 2);
        expect(result).toBe(-1);


    })

    test(' deve dividir dois números negativos ', async () => {
        const result = service.Dividir(-2, -2);
        expect(result).toBe(1);

    })

    test(' deve dividir zero e outro número', async () => {
        const result = service.Dividir(0, 2);
        expect(result).toBe(0);


    })
})                                                                                                              