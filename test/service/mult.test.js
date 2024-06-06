const Servico = require("../../src/services/service");

describe('Teste função multiplicação', () => {
    let servico = new Servico();

    it('CT27 - Deve multiplicar 100 * 50 e o resultado deverá ser 5.000', () => {
        const resultado = servico.Multiplicar(100, 50)
        expect(resultado).toBe(5000)
    })

    it('CT28 - Deve multiplicar 50 * 100 e o resultado deverá ser 5.000', () => {
        const resultado = servico.Multiplicar(50, 100)
        expect(resultado).toBe(5000)
    })

    it('CT29 - Deve multiplicar -100 * 50 e o resultado deverá ser -5.000', () => {
        const resultado = servico.Multiplicar(-100, 50)
        expect(resultado).toBe(-5000)
    })

    it('CT30 - Deve multiplicar 0 * -50 e o resultado deverá ser 0', () => {
        const resultado = servico.Multiplicar(0, -50)
        expect(resultado).toBe(-0)
    })

    it('CT31 - Deve multiplicar 100 * 0 e o resultado deverá ser 0', () => {
        const resultado = servico.Multiplicar(100, 0)
        expect(resultado).toBe(0)
    })

    it('CT32 - Deve multiplicar abc * 50 e o resultado deverá ser - Não dá para multiplicar com valores inválidos!', () => {
        // const resultado = servico.Multiplicar('abc', 50)
        const resultado = () => servico.Multiplicar('abc', 50)
        // expect(resultado).toBe(0)
        expect(resultado).toThrowError('Não dá para multiplicar com valores inválidos!')
    })

    it('CT33 - Deve multiplicar 100 * abc e o resultado deverá ser - Não dá para multiplicar com valores inválidos!', () => {
        // const resultado = servico.Multiplicar(100, 'abc')
        const resultado = () => servico.Multiplicar(100, 'abc')
        // expect(resultado).toBe(0)
        expect(resultado).toThrowError('Não dá para multiplicar com valores inválidos!')
    })

    it('CT34 - Deve multiplicar  * 50 e o resultado deverá ser - Não dá para multiplicar com valores inválidos!', () => {
        // const resultado = servico.Multiplicar(50)
        const resultado = () => servico.Multiplicar(50)
        // expect(resultado).toBe(0)
        expect(resultado).toThrowError('Não dá para multiplicar com valores inválidos!')
    })

    it('CT35 - Deve multiplicar 100 *  e o resultado deverá ser - Não dá para multiplicar com valores inválidos!', () => {
        const resultado = () => servico.Multiplicar(100)
        // expect(resultado).toBe(0)
        expect(resultado).toThrowError('Não dá para multiplicar com valores inválidos!')
    })
})