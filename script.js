// ETCH-A-SKETCH

// DOM Element Selectors
const inputValueElement = document.querySelector('input[type="range"]');

// Function to get grid size value from input[type="range"]
function getInputValue() {
  let inputVal = inputValueElement.value;
  inputVal = 90;
  console.log(inputVal);
}

getInputValue();