const ServicoExercicio = require('../../src/services/service');

describe('Testando função dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Dividir dois números positivos (10/5)', () => {
        const result = servicoExercicio.Dividir(10, 5);

        expect(result).toBe(2);
    });

    it('CT02 - Dividir uma letra e um número (a/2)', () => {
        const result = () => servicoExercicio.Dividir("a", 3);

        expect(result).toThrowError("Somente é possível dividir com números nos paramêtros");
    });

    it('CT03 - Dividir um número negativo e um positivo (-10/5)', () => {
        const result = servicoExercicio.Dividir(-10, 5);

        expect(result).toBe(-2);
    });

    it('CT04 - Dividir um numero decimal por um número inteiro positivo (10.8/5)', () => {
        const result = servicoExercicio.Dividir(10.8, 5);

        expect(result).toBe(2.16);
    });

    it('CT03 - Dividir 0 e um positivo (0/5)', () => {
        const result = servicoExercicio.Dividir(0, 5);

        expect(result).toBe(0);
    });
});