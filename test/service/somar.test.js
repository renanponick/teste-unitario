const Servico = require("../../src/services/service");

describe('Teste função somar', () => {
    let servico = new Servico();

    it('CT01 - Deve somar 12 + 13 e o resultado deverá ser 25', () => {
        const resultado = servico.Somar(12, 13)
        expect(resultado).toBe(25)
    })

    it('CT02 - Deve somar -12 + 13 e o resultado deverá ser 1', () => {
        const resultado = servico.Somar(-12, 13) //fica em espera até o momento de execução
        // expect(resultado).toThrowError('Não dá para somar letras')
        expect(resultado).toBe(1)
    })

    it('CT03 - Deve somar -12 + 13 e o resultado deverá ser -1', () => {
        const resultado = servico.Somar(12, -13) //fica em espera até o momento de execução
        // expect(resultado).toThrowError('Não dá para somar letras')
        expect(resultado).toBe(-1)
    })

    it('CT04 - Deve somar 0 + 13 e o resultado deverá ser 13', () => {
        const resultado = servico.Somar(0, 13) //fica em espera até o momento de execução
        expect(resultado).toBe(13)
    })

    it('CT05 - Deve somar 12 + 0 e o resultado deverá ser 12', () => {
        const resultado = servico.Somar(12, 0) //fica em espera até o momento de execução
        expect(resultado).toBe(12)
        // expect(resultado).toBe(12)
    })

    it('CT06 - Deve somar a + 13 e o resultado deverá ser - Não dá para somar com valores inválidos!', () => {
        const resultado = () => servico.Somar('a', 13) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para somar com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT07 - Deve somar 12 + a e o resultado deverá ser - Não dá para somar com valores inválidos!', () => {
        const resultado = () => servico.Somar(12, 'a') //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para somar com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT08 - Deve somar / + 12 e o resultado deverá ser - Não dá para somar com valores inválidos!', () => {
        const resultado = () => servico.Somar(12) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para somar com valores inválidos!')
        // expect(resultado).toBe(13)
    })
})