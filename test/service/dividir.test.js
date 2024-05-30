const ServicoExercicio = require('../../src/services/service');

describe('Testando função dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Dividir dois números positivos (2+2)', () => {
        const result = servicoExercicio.Dividir(10, 5);

        expect(result).toBe(2);
    });

    it('CT02 - Dividir uma letra e um número (a+2)', () => {
        const result = () => servicoExercicio.Dividir("a", 3);

        expect(result).toThrowError("Somente é possível dividir com números nos paramêtros");
    });

    it('CT03 - Dividir um número negativo e um positivo (-1+3)', () => {
        const result = servicoExercicio.Dividir(-10, 5);

        expect(result).toBe(-2);
    });
});