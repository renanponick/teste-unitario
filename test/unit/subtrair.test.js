const ServicoExercicio = require('../../src/services/service.js')

describe('ServicoExercicio  ', () => {
    let servicoExercicio;

    beforeEach(() =>{
        servicoExercicio = new ServicoExercicio();
    });

    it('Subtrair dois numeros', () => {
        const result = servicoExercicio.Subtrair(10,5)

        console.log(result)

        expect(result).toBe(5)
    })
    it('Subtrair dois numeros negativos', () => {
        const result = servicoExercicio.Subtrair(-5,-5)

        console.log(result)

        expect(result).toBe(0)
    })
    it('Subtrair número com 0', () => {
        const result = servicoExercicio.Subtrair(5,0)

        console.log(result)

        expect(result).toBe(5)
    })
    it('Subtrair numero com letra', () => {
        const result = servicoExercicio.Subtrair('a',5)

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
    it('Subtrair numero com letra', () => {
        const result = servicoExercicio.Subtrair(5,'a')

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
})