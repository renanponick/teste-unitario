const Service = require('../../src/services/service');

describe('Teste de subtração', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    })

    test('Deve subtrair dois números', () => {
        const result = service.Subtrair(10, 2);
        expect(result).toBe(8);
    });

    test('Deve retornar erro se num1 não for informado', () => {
        const result = () => service.Subtrair(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num2 não for informado', () => {
        const result = () => service.Subtrair(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num1 não for um número', () => {
        expect(() => service.Subtrair('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });

});