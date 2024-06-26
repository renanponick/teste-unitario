class ServicoExercicio {

  Somar(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
      throw new Error('Informe os dois números para a soma');
    }

    if(isNaN(num1) || isNaN(num2)) {
      throw new Error('Informe apenas números');
    }

    return num1 + num2;
  }


  Subtrair(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
      throw new Error("Informe os dois números para a subtração");
    }
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe apenas números");
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
      throw new Error("Informe os dois números para a multiplicação");
    }
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe apenas números");
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
      throw new Error("Informe os dois números para divisão");
    }
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe apenas números");
    }
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;