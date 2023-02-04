let amountInput = document.getElementById("billInput");
let resultsSection = document.querySelector("#resultDisplaySection");
let submitBtn = document.querySelector("#submitBtn");

let billInputHandler = function (event) {
  event.preventDefault();

  let amount = amountInput.value;
  console.log(amount);
  calculateTip(amount)

  if(amount === NaN) {
    window.alert('invalid Input')
  }
  
};


function calculateTip(amount) {
let tenPercent = amount * 2
console.log(tenPercent)
}
submitBtn, addEventListener("click", billInputHandler);
