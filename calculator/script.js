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
opButtons.forEach(button => {button.addEventListener("click", () => {
  if (button.id === "=" && seq.length % 2 == 1) {
    display.textContent = calculateResult(seq);
    seq = [];
  } else {
    seq.push(button.textContent);
    display.textContent = seq.join(" ");
  }
})})

function calculateResult(expression) {
  let result = parseInt(expression[0], 10);  // Convert the first token to an integer

  for (let i = 1; i < expression.length; i += 2) {
    const operator = expression[i];
    const operand = parseInt(expression[i + 1], 10);  // Convert the next token to an integer
    result = operate(result, operator, operand);}
  return result;
}

function clear() {
  seq = [];
  display.textContent = "";
}
clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => {
  clear();
})
