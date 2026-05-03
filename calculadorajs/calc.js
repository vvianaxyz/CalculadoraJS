let display = document.getElementById('display');

  // Adiciona números e símbolos ao visor
  function appendNumber(input) {
      // Se o display tiver apenas '0', substitui pelo novo número
      if (display.value === '0') {
          display.value = input;
      } else {
          display.value += input;
      }
  }

  // Adiciona a operação ao visor
  function appendOperation(operation) {
      display.value += operation;
  }

  // Aciona o botão de limpar
  function clearDisplay() {
      display.value = '';
  }

  // Faz o cálculo matemático
  function calculate() {
      try {
        // Substitui todos os % por /100 antes de calcular
        let expressao = display.value.replace(/%/g, '/100');
        display.value = eval(expressao);
    } catch (error) {
        display.value = "Erro";
    }
  }

  //Back apaga o último caractere do visor
  function back() {
      display.value = display.value.slice(0, -1);
  }
