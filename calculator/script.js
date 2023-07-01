function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

let left;
let right;
let operator;

function operate (left, operator, right) {
  if (operator=="+") {
    return add(left,right);
  } else if (operator=="-") {
    return subtract(left,right);
  } else if (operator=="x") {
    return multiply(left, right);
  } else if (operator=="/") {
    if (right != "0"){
      return divide(left,right);
    } else {
      return "Can't divide by 0!"
    }
  }
}

let opButtons = document.querySelectorAll(".op-btn");
let display = document.querySelector(".display-text");
let seq = [];
let currentNumber = "";
// opButtons.forEach(button => {button.addEventListener("click", () => {
//   if (button.id === "=" && seq.length % 2 == 1) {
//     display.textContent = calculateResult(seq);
//     seq = [];
//   } else {
//     seq.push(button.textContent);
//     display.textContent = seq.join(" ");
//   }
// })})

function calculateResult(expression) {
  let result = parseFloat(expression[0], 10);  // Convert the first token to an integer

  for (let i = 1; i < expression.length; i += 2) {
    const operator = expression[i];
    const operand = parseFloat(expression[i + 1], 10);  // Convert the next token to an integer
    result = operate(result, operator, operand);}
  return result;
}

opButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "=" && seq.length % 2 == 0) {
      seq.push(currentNumber);
      display.textContent = calculateResult(seq);
      seq = [];
      currentNumber = "";
    } else if (button.id === "delete") {
      if (currentNumber.length > 0) {
        currentNumber = currentNumber.substring(0,currentNumber.length-1);
        display.textContent = currentNumber;
      } else if (seq.length > 0) {
        seq.pop(); // Remove the last element from the sequence
        display.textContent = seq.join(" ");
      }
    } else {
      if (parseFloat(button.textContent, 10) >= 0 || button.id==='.') {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
      } else {
        seq.push(currentNumber);
        seq.push(button.textContent);
        display.textContent = seq.join(" ");
        currentNumber = "";
      }
    }
  });
});

function clear() {
  seq = [];
  display.textContent = "";
}
clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => {
  clear();
})
