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

// EQUALS
let equals = '';

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
  console.log('0');
});
oneBtn.addEventListener('click', function () {
  console.log('1');
});
twoBtn.addEventListener('click', function () {
  console.log('2');
});
threeBtn.addEventListener('click', function () {
  console.log('3');
});
fourBtn.addEventListener('click', function () {
  console.log('4');
});
fiveBtn.addEventListener('click', function () {
  console.log('5');
});
sixBtn.addEventListener('click', function () {
  console.log('6');
});
sevenBtn.addEventListener('click', function () {
  console.log('7');
});
eightBtn.addEventListener('click', function () {
  console.log('8');
});
nineBtn.addEventListener('click', function () {
  console.log('9');
});

// DISPLAY CURRENT INPUT //
