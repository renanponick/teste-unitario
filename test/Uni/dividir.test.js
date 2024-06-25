const ServicoExercicio = require("../../src/services/service");

describe('Testando função subtrair', () => {
    let servicoExercicio = new ServicoExercicio();

    it('Fazendo o test que retorna a dividir', () => {
        expect(servicoExercicio.Dividir(2, 2)).toBe(1);
    });
});
