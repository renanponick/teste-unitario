const Servico = require("../../src/services/service");

describe('Teste função subtrair', () => {
    let servico = new Servico();

    it('CT09 - Deve subtrair 100 - 50 e o resultado deverá ser 50', () => {
        const resultado = servico.Subtrair(100, 50)
        expect(resultado).toBe(50)
    })

    it('CT10 - Deve subtrair 50 - 100 e o resultado deverá ser -50', () => {
        const resultado = servico.Subtrair(50, 100) //fica em espera até o momento de execução
        // expect(resultado).toThrowError('Não dá para somar letras')
        expect(resultado).toBe(-50)
    })

    it('CT11 - Deve subtrair -100 - 50 e o resultado deverá ser -50', () => {
        const resultado = servico.Subtrair(-100, 50) //fica em espera até o momento de execução
        // expect(resultado).toThrowError('Não dá para somar letras')
        expect(resultado).toBe(-150)
    })

    it('CT12 - Deve subtrair 100 - -50 e o resultado deverá ser 50', () => {
        const resultado = servico.Subtrair(100, -50) //fica em espera até o momento de execução
        expect(resultado).toBe(150)
    })

    it('CT13 - Deve subtrair 0 - 50 e o resultado deverá ser -50', () => {
        const resultado = servico.Subtrair(0, 50) //fica em espera até o momento de execução
        expect(resultado).toBe(-50)
        // expect(resultado).toBe(12)
    })

    it('CT14 - Deve subtrair 100 - 0 e o resultado deverá ser 100', () => {
        const resultado = servico.Subtrair(100, 0) //fica em espera até o momento de execução
        // expect(resultado).toThrowError('Não dá para somar com valores inválidos!')
        expect(resultado).toBe(100)
        // expect(resultado).toThrowError('Não dá para subtrair com valores inválidos!')

    })

    it('CT15 - Deve subtrair 100 - abc e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Subtrair(100, 'abc') //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para subtrair com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT16 - Deve subtrair abc - 50 e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Subtrair('abc', 50) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para subtrair com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT17 - Deve subtrair / - 50 e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Subtrair(50) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para subtrair com valores inválidos!')
        // expect(resultado).toBe(13)
    })

    it('CT18 - Deve subtrair 100 - / e o resultado deverá ser - Não dá para subtrair com valores inválidos!', () => {
        const resultado = () => servico.Subtrair(100) //fica em espera até o momento de execução
        expect(resultado).toThrowError('Não dá para subtrair com valores inválidos!')
        // expect(resultado).toBe(13)
    })
})