let amountInput = document.getElementById("billInput");
let resultsSection = document.querySelector("#resultDisplaySection");
let submitBtn = document.querySelector("#submitBtn");

let billInputHandler = function (event) {
  event.preventDefault();

  let amount = amountInput.value;
  calculateTip(amount)
  amount.amountInput = " "

  if(amount === 0) {
    window.alert('invalid Input')
  }
  
};


function calculateTip(amount) {
let tenPercent = amount * 0.10
let twentyPercent = amount * 0.20
let thirtyPercent = amount * 0.30

console.log(tenPercent.toFixed(2))
console.log(twentyPercent.toFixed(2))
console.log(thirtyPercent.toFixed(2))
}
submitBtn, addEventListener("click", billInputHandler);
