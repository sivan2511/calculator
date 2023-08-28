// script.js
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const calculateButton = document.getElementById('calculate');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.value;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.value;
  });
});

calculateButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
});

deleteButton.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

clearButton.addEventListener('click', () => {
  display.value = '';
});
