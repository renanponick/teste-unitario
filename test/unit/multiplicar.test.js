const Service = require('../../src/services/service');

describe('Teste de multiplicação', () => {
    let service;

    beforeAll(() => {
        service = new Service();
    });

    test('Deve multiplicar dois números', () => {
        const result = service.Multiplicar(2, 2);
        expect(result).toBe(4);
    });

    test('Deve retornar erro se num1 não for informado', () => {
        const result = () => service.Multiplicar(null, 13);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num2 não for informado', () => {
        const result = () => service.Multiplicar(12, null);
        expect(result).toThrowError('Todos os valores devem ser informados');
    });

    test('Deve retornar erro se num1 não for um número', () => {
        expect(() => service.Multiplicar('doze', 13)).toThrowError('Todos os valores devem ser numéricos');
    });

});