class ServicoExercicio {

    Somar(num1, num2){
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Não dá para somar com valores inválidos!');
      } 
      return num1 + num2;
    }

    Subtrair(num1, num2){
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Não dá para subtrair com valores inválidos!');
      } 
      return num1 - num2;
    }

    Multiplicar(num1, num2){
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Não dá para multiplicar com valores inválidos!');
      } 
      return num1 * num2;
    }

    Dividir(num1, num2){
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Não dá para dividir com valores inválidos!');
      } 
      return num1 / num2;
    }

}

module.exports = ServicoExercicio;