let calculation = null;
let justCalculated = false;

function calculate(leftOperand, operator, rightOperand) {
  switch (operator) {
    case '+':
      return parseFloat(leftOperand) + parseFloat(rightOperand);
      break;

    case '–':
      return parseFloat(leftOperand) - parseFloat(rightOperand);
      break;

    case '÷':
      return parseFloat(leftOperand) / parseFloat(rightOperand);
      break;

    case 'x':
      return parseFloat(leftOperand) * parseFloat(rightOperand);
      break;
  }
}

//Adding Clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  const inputText = document.getElementById('inputText');
  calculation = null;
  justCalculated = false;
  inputText.value = 0;
});

//
//Adding Dot button
const dotButton = document.getElementById('dot');

dotButton.addEventListener('click', () => {
  const inputText = document.getElementById('inputText');

  if (inputText.value === '0') {
    inputText.value = '0.';
  } else if (!inputText.value.includes('.')) {
    inputText.value = inputText.value + '.';
  }
});
//

//
// Adding Number buttons
const numberButtons = document.querySelectorAll('.number');
for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];

  numberButton.addEventListener('click', () => {
    const numberValue = numberButton.innerHTML;

    const lastChar = inputText.value[inputText.value.length - 1];

    if (justCalculated) {
      inputText.value = numberValue;
      justCalculated = false;
    } else if (inputText.value === '0') {
      inputText.value = numberValue;
    } else if (
      lastChar === '+' ||
      lastChar === '–' ||
      lastChar === 'x' ||
      lastChar === '÷'
    ) {
      calculation = inputText.value;
      inputText.value = numberValue;
    } else {
      inputText.value = inputText.value + numberValue;
    }
  });
}

//
//Adding Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener('click', () => {
    justCalculated = false;
    const operatorValue = operatorButton.innerHTML;
    let lastChar = inputText.value[inputText.value.length - 1];
    if (
      lastChar === '+' ||
      lastChar === '–' ||
      lastChar === 'x' ||
      lastChar === '÷'
    ) {
      inputText.value =
        inputText.value.substring(0, inputText.value.length - 1) +
        operatorValue;
    } else if (calculation != null) {
      const leftOperand = calculation.substring(0, calculation.length - 1);
      const rightOperand = inputText.value;
      const operator = calculation.substring(calculation.length - 1);
      inputText.value =
        calculate(leftOperand, operator, rightOperand) + operatorValue;
    } else {
      inputText.value = inputText.value + operatorValue;
    }
  });
}

//
// Adding Equal button
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
  if (calculation != null && inputText.value.length > 0) {
    //calculo

    const leftOperand = calculation.substring(0, calculation.length - 1);
    const rightOperand = inputText.value;
    const operator = calculation.substring(calculation.length - 1);
    let result = calculate(leftOperand, operator, rightOperand);
    justCalculated = true;
    inputText.value = result;
    calculation = null;
  }
});
