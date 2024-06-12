const ServicoExercicio = require('../../src/services/service');

describe('Testando função somar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Somar dois números positivos (2+3)', () => {
        const result = servicoExercicio.Somar(2, 3);

        expect(result).toBe(5);
    });

    it('CT02 - Somar uma letra e um número (a+3)', () => {
        const result = () => servicoExercicio.Somar("a", 3);

        expect(result).toThrowError("Somente é possível somar com números nos paramêtros");
    });

    it('CT03 - Somar um número negativo e um positivo (-1+3)', () => {
        const result = servicoExercicio.Somar(-1, 3);

        expect(result).toBe(2);
    });

    it('CT04 - Somar um número decimal e um número inteiro positivo (1.5+5)', () => {
        const result = servicoExercicio.Somar(1.5, 5)

        expect(result).toBe(6.5)
    })
});