const Service = require('../../src/services/service');

describe('Teste de soma', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    });

    test('Deve somar dois números', () => {
        const result = service.Somar(2, 2);
        expect(result).toBe(4);
    });

    test('Deve retornar erro se num1 não for informado', () => {
        const result = () => service.Somar(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num2 não for informado', () => {
        const result = () => service.Somar(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num1 não for um número', () => {
        expect(() => service.Somar('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });
})