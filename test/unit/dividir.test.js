const Service = require('../../src/services/service');

describe('Teste de divisão', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    });

    test('Deve dividir dois números', () => {
        const result = service.Dividir(10, 2);
        expect(result).toBe(5);
    });

    test('Deve retornar erro se num1 não for informado', () => {
        const result = () => service.Dividir(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num2 não for informado', () => {
        const result = () => service.Dividir(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num1 não for um número', () => {
        expect(() => service.Dividir('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });

});