const ServicoExercicio = require('../../src/services/service');

describe('Testando função multiplicar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Multiplicar dois números positivos (2+2)', () => {
        const result = servicoExercicio.Multiplicar(2, 3);

        expect(result).toBe(6);
    });

    it('CT02 - Multiplicar uma letra e um número (a+2)', () => {
        const result = () => servicoExercicio.Multiplicar("a", 3);

        expect(result).toThrowError("Somente é possível multiplicar com números nos paramêtros");
    });

    it('CT03 - Multiplicar um número negativo e um positivo (-1+3)', () => {
        const result = servicoExercicio.Multiplicar(-1, 3);

        expect(result).toBe(-3);
    });
});