let amountInput = document.getElementById("billInput");
let resultsSection = document.querySelector("#resultDisplaySection");
let submitBtn = document.querySelector("#submitBtn");

let billInputHandler = function (event) {
  event.preventDefault();

  let amount = amountInput.value;
  calculateTip(amount);
  amount.amountInput = " ";

  if (amount === 0) {
    window.alert("invalid Input");
  }
};

function calculateTip(amount) {
  let percentagesArray = [0.1, 0.15, 0.2, 0.25];

  for (let i = 0; i < percentagesArray.length; i++) {
    let response = amount * percentagesArray[i];

    console.log(`$${response.toFixed(2)}`);
  }
}
submitBtn, addEventListener("click", billInputHandler);
