const ServicoExercicio = require("../../src/services/service");

describe('Testando função somar', () => {
    let servicoExercicio = new ServicoExercicio();

    it('Fazendo o test que retorna a soma', () => {
        expect(servicoExercicio.Somar(2, 2)).toBe(4);
    });
});
