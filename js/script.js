// If you're reading this I apologize for the horribly managed code
// I will use this as an opportunity to help learn refactoring
// to maintain and improve this code
// TODO: allow users to perform operations based on previous answer
// TODO: history section
// ! users should not be able to return an incorrect result
//  alt buttons
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

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
// follows 'BEDMAS' and isn't called until the user
// clicks the equals button.
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
  // equals
  return numbers[0];
}

// USER INPUT VARIABLES //
// these variables store the user inputs to be used in
// the operate function as arguments
let numbers = []; // integer
let operators = []; // string

// CHECK INPUT TYPE //
// these values are used to check if the user is using
// a specific button on the calculator to ensure proper
// syntax is being used.
let numType = false;
let opType = false;
let delType = false;
let decType = false;
let eqlType = false;

// reset boolean values
function resetBV() {
  numType = false;
  delType = false;
  decType = false;
}
// value to display for screen output depending on
// ...INPUT TYPE // to make sure numbers are displayed
// properly throughout the equation input by user
let textOnType = ``;

// CLEAR //
// clear screen function
function clearScreen() {
  screenOutput.textContent = '0';
  resetEC();
  resetBV();
  // reset most recent equation
  previewLast.textContent = '';
}
// call clearScreen() function on button click
clearBtn.addEventListener('click', function () {
  clearScreen();
});

// DELETE //
deleteBtn.addEventListener('click', function () {
  if (eqlType) {
    clearScreen();
    eqlType = false;
    return;
  } else if (numType) {
    currentNum = currentNum.slice(0, -1);
    screenOutput.textContent = `${textOnType}${currentNum}`;
    decType = false;
  } else if (!numType) {
    if (!delType) {
      operators.pop();
      textOnType = textOnType.slice(0, -2) + '';
      currentMaths = currentMaths.slice(0, -2) + '';
      screenOutput.textContent = `${textOnType} `;
      currentOp = '';
      delType = true;
      opType = false;
    }
  }
});

// NUMBERS //
// get num buttons to add event listeners
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
// decimal button will be treated as a number
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', function () {
  if (!decType) {
    currentNum += '.';
    decType = true;
  }
  numType = true;
  showMaths();
});
// store buttons in numbers array to loop through buttons
const numberButtons = [
  zeroBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
];
// num btn event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', function () {
    currentNum += button.value;
    numType = true;
    opType = false;
    showMaths();
  });
});

// OPERATORS //
// get op buttons to add event listeners
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
// store buttons in operators array to loop through buttons
const operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
// op btn event listeners
operatorButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // only allow one operator to be clicked at a time
    if (!opType) {
      // only push string of current number if the delete btn hasn't been used
      if (!delType) {
        // convert string numbers to integers
        numbers.push(Number(currentNum));
      }
      currentOp = button.value;
      operators.push(currentOp);
      opType = true;
      resetBV();
      showMaths();
      currentOp = '';
      currentNum = '';
    }
  });
});

// EQUALS //
equalsBtn.addEventListener('click', function () {
  //  convert string numbers to integers
  numbers.push(Number(currentNum));
  // store result in equals
  let equals = operate(numbers, operators);
  // check for decimal
  if (Number.isInteger(equals)) {
    // result is an integer, so display it as is
    console.log(equals);
    screenOutput.textContent = equals;
  } else {
    // result is not an integer, so use toFixed to display it with 2 decimal places
    console.log(equals.toFixed(2));
    screenOutput.textContent = equals.toFixed(2);
  }
  // set previous equation preview
  let originalString = `${currentMaths} ${currentNum} =`;
  // ellipse text when length exceeds 36 char
  let truncatedString = truncateText(originalString, 36);
  previewLast.textContent = truncatedString;
  eqlType = true;
  opType = false;
  resetEC();
  resetBV();
});

// ELLIPSE TEXT //
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
}

// DISPLAY CURRENT INPUT //
function showMaths() {
  // display this if user input is a number
  if (numType) {
    screenOutput.textContent = `${textOnType}${currentNum}`;
  }
  // display this if the user isn't typing a number
  else if (!numType) {
    textOnType = `${currentMaths} ${currentNum} ${currentOp} `;
    currentMaths += `${currentNum} ${currentOp} `;
    screenOutput.textContent = `${currentMaths}`;
  }
}

//  HELPER FUNCTIONS //
// reset on equals or clear
function resetEC() {
  equals = ``;
  currentNum = ``;
  currentOp = ``;
  currentMaths = ``;
  textOnType = ``;
  numbers = [];
  operators = [];
  numType = false;
  opType = false;
  delType = false;
  decType = false;
  eqlType = false;
}
