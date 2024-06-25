const ServicoExercicio = require("../../src/services/service");

describe('Testando função multiplicar', () => {
    let servicoExercicio = new ServicoExercicio();

    it('Fazendo o test que retorna a multiplicação', () => {
        expect(servicoExercicio.Multiplicar(2, 2)).toBe(4);
    });
});
