const ServicoExercicio = require('../../src/services/service.js')

describe('ServicoExercicio  ', () => {
    let servicoExercicio;

    beforeEach(() =>{
        servicoExercicio = new ServicoExercicio();
    });

    it('Multiplicar dois numeros', () => {
        const result = servicoExercicio.Multiplicar(10,5)

        console.log(result)

        expect(result).toBe(50)
    })
    it('Multiplicar dois numeros negativos', () => {
        const result = servicoExercicio.Multiplicar(-5,-5)

        console.log(result)

        expect(result).toBe(25)
    })
    it('Multiplicar número com 0', () => {
        const result = servicoExercicio.Multiplicar(5,0)

        console.log(result)

        expect(result).toBe(0)
    })
    it('Multiplicar numero com letra', () => {
        const result = servicoExercicio.Multiplicar('a',5)

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
    it('Multiplicar numero com letra', () => {
        const result = servicoExercicio.Multiplicar(5,'a')

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
})