const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
  }
});

function add(input) {
  input + input;
  return result;
  console.log(result);
}

function subtract(input) {
  return input - input;
}

function multiply(input) {
  return input * input;
}

function divide(input) {
  return input / input;
}
