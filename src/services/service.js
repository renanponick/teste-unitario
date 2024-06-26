class ServicoExercicio {

  Somar(num1, num2){
    if(isNaN(num1)||isNaN (num2)){
      return "Somente permitido números"
    }
    return num1 + num2;
  }

  Subtrair(num1, num2){
    if(isNaN(num1)||isNaN (num2)){
      return "Somente permitido números"
    }
    
    return num1 - num2;
  }

  Multiplicar(num1, num2){
    if(isNaN(num1)||isNaN (num2)){
      return "Somente permitido números"
    }
    return num1 * num2;
  }

  Dividir(num1, num2){
    if(isNaN(num1)||isNaN (num2)){
      return "Somente permitido números"
    }
    if(num2 == 0){
      return 0
    }
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;