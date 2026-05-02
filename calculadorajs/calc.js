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
          // O eval() pega o texto do visor e resolve o cálculo
          display.value = eval(display.value);
      } catch (error) {
          display.value = "Erro";
      }
  }
