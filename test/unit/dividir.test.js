const ServicoExercicio = require('../../src/services/service.js')

describe('ServicoExercicio  ', () => {
    let servicoExercicio;

    beforeEach(() =>{
        servicoExercicio = new ServicoExercicio();
    });

    it('Dividir dois numeros', () => {
        const result = servicoExercicio.Dividir(10,5)

        console.log(result)

        expect(result).toBe(2)
    })
    it('Dividir dois numeros negativos', () => {
        const result = servicoExercicio.Dividir(-5,-5)

        console.log(result)

        expect(result).toBe(1)
    })
    it('Dividir número com 0', () => {
        const result = servicoExercicio.Dividir(5,0)

        console.log(result)

        expect(result).toBe(0)
    })
    it('Dividir numero com letra', () => {
        const result = servicoExercicio.Dividir('a',5)

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
    it('Dividir numero com letra', () => {
        const result = servicoExercicio.Dividir(5,'a')

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
})