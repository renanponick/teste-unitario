class ServicoExercicio {

  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível somar com números nos paramêtros")
    }
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível subtrair com números nos paramêtros")
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível multiplicar com números nos paramêtros")
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível dividir com números nos paramêtros")
    }
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;