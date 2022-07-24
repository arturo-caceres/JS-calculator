//Adding Clear button
const clearButton = document.getElementById('clear');
console.log(clearButton);

clearButton.addEventListener('click', () => {
  console.log('Clear');

  const inputText = document.getElementById('inputText');
  console.log(inputText);

  inputText.value = 0;
});

//
//Adding Dot button
const dotButton = document.getElementById('dot');
console.log(dotButton);

dotButton.addEventListener('click', () => {
  console.log('.');

  const inputText = document.getElementById('inputText');

  if (inputText.value === '0') {
    inputText.value = '0.';
  } else if (!inputText.value.includes('.')) {
    inputText.value = inputText.value + '.';
  }
});

//
// Adding Number buttons
const numberButtons = document.querySelectorAll('.number');
console.log(numberButtons);

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  console.log(numberButton);

  numberButton.addEventListener('click', () => {
    const numberValue = numberButton.innerHTML;
    console.log(numberValue);

    if (inputText.value === '0') {
      inputText.value = numberValue;
    } else {
      inputText.value = inputText.value + numberValue;
    }

    console.log(inputText);
  });
}

//
//Adding Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
console.log(operatorButtons);

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  console.log(operatorButton);

  operatorButton.addEventListener('click', () => {
    const operatorValue = operatorButton.innerHTML;
    console.log(operatorValue);

    if (inputText.value === '0') {
      inputText.value = '0.';
    }
  });
}
