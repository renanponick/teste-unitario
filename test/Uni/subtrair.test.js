const ServicoExercicio = require("../../src/services/service");

describe('Testando função subtrair', () => {
    let servicoExercicio = new ServicoExercicio();

    it('Fazendo o test que retorna a subtração', () => {
        expect(servicoExercicio.Subtrair(2, 2)).toBe(0);
    });
});
