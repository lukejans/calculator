//  EVENT LISTENERS //
const equalsBtn = document.getElementById('equals');

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');

const screenOutput = document.getElementById('dis-in-out');

// INITIALIZE BUTTON INPUTS //
let equals = '';
let currentNum = '';
let currentOp = '';

// ADD //
function add(a, b) {
  return a + b;
}

// SUBTRACT //
function subtract(a, b) {
  return a - b;
}

// MULTIPLY //
function multiply(a, b) {
  return a * b;
}

// DIVIDE //
function divide(a, b) {
  return a / b;
}

// OPERATE //
function operate(numbers, operators) {
  // multiplication and division
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] == '*') {
      numbers[i] = multiply(numbers[i], numbers[i + 1]);
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] == '/') {
      numbers[i] = divide(numbers[i], numbers[i + 1]);
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }
  // addition and subtraction
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] == '+') {
      numbers[i] = add(numbers[i], numbers[i + 1]);
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] == '-') {
      numbers[i] = subtract(numbers[i], numbers[i + 1]);
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }
  // EQUALS //
  equals = numbers[0].toFixed(2);
  return numbers[0];
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
const operators = ['+', '-', '*', '/'];
console.log(operate(numbers, operators));

// CLEAR //
function clear() {}

// PRINT EQUALS //
equalsBtn.addEventListener('click', function () {
  console.log(equals);
  screenOutput.textContent = equals;
  sumHistory = equals;
  equals = '';
});

// DIGITS //
zeroBtn.addEventListener('click', function () {
  currentNum = currentNum + '0';
  screenOutput.textContent = currentNum;
});
oneBtn.addEventListener('click', function () {
  currentNum = currentNum + '1';
  screenOutput.textContent = currentNum;
});
twoBtn.addEventListener('click', function () {
  currentNum = currentNum + '2';
  screenOutput.textContent = currentNum;
});
threeBtn.addEventListener('click', function () {
  currentNum = currentNum + '3';
  screenOutput.textContent = currentNum;
});
fourBtn.addEventListener('click', function () {
  currentNum = currentNum + '4';
  screenOutput.textContent = currentNum;
});
fiveBtn.addEventListener('click', function () {
  currentNum = currentNum + '5';
  screenOutput.textContent = currentNum;
});
sixBtn.addEventListener('click', function () {
  currentNum = currentNum + '6';
  screenOutput.textContent = currentNum;
});
sevenBtn.addEventListener('click', function () {
  currentNum = currentNum + '7';
  screenOutput.textContent = currentNum;
});
eightBtn.addEventListener('click', function () {
  currentNum = currentNum + '8';
  screenOutput.textContent = currentNum;
});
nineBtn.addEventListener('click', function () {
  currentNum = currentNum + '9';
  screenOutput.textContent = currentNum;
});

// DISPLAY CURRENT INPUT //
