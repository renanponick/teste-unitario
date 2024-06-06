const Servico = require("../../src/services/service");

describe('Teste função divisão', () => {
    let servico = new Servico();

    it('CT19 - Deve dividir 50 / 100 e o resultado deverá ser 10', () => {
        const resultado = servico.Dividir(50, 100)
        expect(resultado).toBe(0.5)
    })

    it('CT20 - Deve dividir -100 / 10 e o resultado deverá ser -10', () => {
        const resultado = servico.Dividir(-100, 10)
        expect(resultado).toBe(-10)
    })

    it('CT21 - Deve dividir 100 / -10 e o resultado deverá ser -10', () => {
        const resultado = servico.Dividir(100, -10)
        expect(resultado).toBe(-10)
    })

    it('CT22 - Deve dividir 0 / 10 e o resultado deverá ser 0', () => {
        const resultado = servico.Dividir(0, 10)
        expect(resultado).toBe(0)
    })

    it('CT23 - Deve dividir a / 13 e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Dividir('a', 13) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para dividir com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT24 - Deve dividir 12 / a e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Dividir(12, 'a') //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para dividir com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT25 - Deve dividir 12 /  e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Dividir(12) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para dividir com valores inválidos!')
        // expect(resultado).toBe(13)
    })
})