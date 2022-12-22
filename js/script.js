//  EVENT LISTENERS //
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
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
const previewLast = document.getElementById('preview');

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
  equals = numbers[0];
  return numbers[0];
}
// USER INPUT VARIABLES //
let numbers = []; // integer
let operators = []; // string
// console.log(operate(numbers, operators));

// CHECK WHATS TYPED FOR DISPLAY //
let numType = false;
let textOnType = ``;

// CLEAR //
clearBtn.addEventListener('click', function () {
  screenOutput.textContent = '0';
  resetEC();
  previewLast.textContent = '';
});

// NUMBERS //
zeroBtn.addEventListener('click', function () {
  currentNum += '0';
  numType = true;
  showMaths();
});
oneBtn.addEventListener('click', function () {
  currentNum += '1';
  numType = true;
  showMaths();
});
twoBtn.addEventListener('click', function () {
  currentNum += '2';
  numType = true;
  showMaths();
});
threeBtn.addEventListener('click', function () {
  currentNum += '3';
  numType = true;
  showMaths();
});
fourBtn.addEventListener('click', function () {
  currentNum += '4';
  numType = true;
  showMaths();
});
fiveBtn.addEventListener('click', function () {
  currentNum += '5';
  numType = true;
  showMaths();
});
sixBtn.addEventListener('click', function () {
  currentNum += '6';
  numType = true;
  showMaths();
});
sevenBtn.addEventListener('click', function () {
  currentNum += '7';
  numType = true;
  showMaths();
});
eightBtn.addEventListener('click', function () {
  currentNum += '8';
  numType = true;
  showMaths();
});
nineBtn.addEventListener('click', function () {
  currentNum += '9';
  numType = true;
  showMaths();
});

// OPERATORS //
addBtn.addEventListener('click', function () {
  currentOp = '+';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  numType = false;
  showMaths();
  currentOp = '';
  currentNum = '';
});
subtractBtn.addEventListener('click', function () {
  currentOp = '-';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  numType = false;
  showMaths();
  currentOp = '';
  currentNum = '';
});
multiplyBtn.addEventListener('click', function () {
  currentOp = '*';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  numType = false;
  showMaths();
  currentOp = '';
  currentNum = '';
});
divideBtn.addEventListener('click', function () {
  currentOp = '/';
  numbers.push(Number(currentNum));
  operators.push(currentOp);
  numType = false;
  showMaths();
  currentOp = '';
  currentNum = '';
});

// EQUALS //
equalsBtn.addEventListener('click', function () {
  numbers.push(Number(currentNum));
  operate(numbers, operators);
  console.log(equals);
  screenOutput.textContent = equals;
  previewLast.textContent = `${currentMaths} ${currentNum} =`;
  resetEC();
});

// DISPLAY CURRENT INPUT //
function showMaths() {
  if (numType) {
    screenOutput.textContent = `${textOnType}${currentNum}`;
  } else if (!numType) {
    textOnType = `${currentMaths} ${currentNum} ${currentOp} `;
    currentMaths += `${currentNum} ${currentOp} `;
    screenOutput.textContent = `${currentMaths}`;
  }
}

//  reset helper function
function resetEC() {
  equals = '';
  currentNum = '';
  currentOp = '';
  currentMaths = ``;
  textOnType = ``;
  numbers = [];
  operators = [];
}
