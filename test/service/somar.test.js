const ServicoExercicio = require('../../src/services/service')

describe('Teste de serviço', () => {
    let servicoExercicio 

    beforeAll(() => {
        servicoExercicio = new ServicoExercicio()
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Somar(2, 2)
        expect(result).toBe(4)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Somar(2, 9)
        expect(result).toBe(11)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Somar(2, 0)
        expect(result).toBe(2)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Somar(2, 20)
        expect(result).toBe(22)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Subtrair(2, 2)
        expect(result).toBe(0)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Subtrair(10, 2)
        expect(result).toBe(8)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Subtrair(20, 2)
        expect(result).toBe(18)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Subtrair(15, 2)
        expect(result).toBe(13)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Multiplicar(2, 2)
        expect(result).toBe(4)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Multiplicar(2, 8)
        expect(result).toBe(16)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Multiplicar(2, 5)
        expect(result).toBe(10)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Multiplicar(2, 3)
        expect(result).toBe(6)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Dividir(2, 2)
        expect(result).toBe(1)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Dividir(4, 2)
        expect(result).toBe(2)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Dividir(10, 2)
        expect(result).toBe(5)
    })

    it('Deve retornar um array de exercicios', async () => {
        const result = await servicoExercicio.Dividir(18, 2)
        expect(result).toBe(9)
    })
})