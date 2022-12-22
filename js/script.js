//  EVENT LISTENERS //
const equalsBtn = document.getElementById('equals');
// numbers
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
// operators
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
// screen
const screenOutput = document.getElementById('dis-in-out');

// INITIALIZE BUTTON INPUTS //
let equals = '';
let currentNum = '';
let currentOp = '';
let currentMaths = '';

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
// USER INPUT VARIABLES //
const numbers = []; // integer
const operators = []; // string
// console.log(operate(numbers, operators));

// CLEAR //
function clear() {}

// NUMBERS //
// screen output from array if length is 1 or greater
zeroBtn.addEventListener('click', function () {
  currentNum = currentNum + '0';
});
oneBtn.addEventListener('click', function () {
  currentNum = currentNum + '1';
});
twoBtn.addEventListener('click', function () {
  currentNum = currentNum + '2';
});
threeBtn.addEventListener('click', function () {
  currentNum = currentNum + '3';
});
fourBtn.addEventListener('click', function () {
  currentNum = currentNum + '4';
});
fiveBtn.addEventListener('click', function () {
  currentNum = currentNum + '5';
});
sixBtn.addEventListener('click', function () {
  currentNum = currentNum + '6';
});
sevenBtn.addEventListener('click', function () {
  currentNum = currentNum + '7';
});
eightBtn.addEventListener('click', function () {
  currentNum = currentNum + '8';
});
nineBtn.addEventListener('click', function () {
  currentNum = currentNum + '9';
});

// DIGITS //
addBtn.addEventListener('click', function () {
  currentOp = '+';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  currentOp = '';
  currentNum = '';
});
subtractBtn.addEventListener('click', function () {
  currentOp = '+';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  currentOp = '';
  currentNum = '';
});
multiplyBtn.addEventListener('click', function () {
  currentOp = '+';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  currentOp = '';
  currentNum = '';
});
divideBtn.addEventListener('click', function () {
  currentOp = '+';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  currentOp = '';
  currentNum = '';
});

// EQUALS //
equalsBtn.addEventListener('click', function () {
  console.log(equals);
  screenOutput.textContent = equals;
  sumHistory = equals;
  numbers.push(Number(currentNum));
  equals = '';
  currentNum = '';
});

// DISPLAY CURRENT INPUT //
