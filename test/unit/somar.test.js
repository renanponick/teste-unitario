const ServicoExercicio = require('../../src/services/service.js')
describe('ServicoExercicio  ', () => {
    let servicoExercicio;

    beforeEach(() =>{
        servicoExercicio = new ServicoExercicio();
    });

    it('somar dois numeros', () => {
        const result = servicoExercicio.Somar(5,5)

        console.log(result)

        expect(result).toBe(10)
    })
    it('somar dois numeros neagtivos', () => {
        const result = servicoExercicio.Somar(-5,-5)

        console.log(result)

        expect(result).toBe(-10)
    })
    it('somar número com 0', () => {
        const result = servicoExercicio.Somar(0,5)

        console.log(result)

        expect(result).toBe(5)
    })
    it('somar numero com letra', () => {
        const result = servicoExercicio.Somar('a',5)

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
    it('somar numero com letra', () => {
        const result = servicoExercicio.Somar(5,'a')

        console.log(result)

        expect(result).toBe("Somente permitido números")
    })
})