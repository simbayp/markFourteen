const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const btnCheck = document.querySelector(".btn-check");
const output = document.querySelector(".output-stocks");

function profitOrLoss() {
  let initialPriceNum = +initialPrice.value;
  let stocksQuantityNum = +stocksQuantity.value;
  let currentPriceNum = +currentPrice.value;

  let cp = initialPriceNum * stocksQuantityNum;
  let sp = currentPriceNum * stocksQuantityNum;

  if (initialPriceNum > 0 && currentPriceNum > 0 && stocksQuantityNum > 0) {
    if (sp > cp) {
      let profit = sp - cp;
      let profitPer = (profit / cp) * 100;
      output.style.color = "green";
      output.innerText = `Your profit is Rs. ${profit} and profit percentage is ${profitPer}%`;
    } else if (sp < cp) {
      let loss = cp - sp;
      let lossPer = (loss / cp) * 100;
      output.style.color = "red";
      output.innerText = `Your loss is Rs. ${loss} and loss percentage is ${lossPer}%`;
    } else {
      output.style.color = "blue";
      output.innerText = "No pain, No gain and No gain, No pain.";
    }
  } else {
    output.style.color = "#94a3b8";
    output.innerText =
      "Initial Price, Current Price or Stocks Quantity can not be negative";
  }
}

btnCheck.addEventListener("click", profitOrLoss);
