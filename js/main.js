document.querySelector('#clickMe').addEventListener('click', ShowCoinFlipOutcome)

function ShowCoinFlipOutcome(){

const coinChoice = document.querySelector("#coinChoice").value;
console.log(coinChoice)
  // go to this address and give us whats there
  fetch(`/api?coinFlip=${coinChoice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#choice").textContent = data.name
      document.querySelector("#outcome").textContent = data.winOrLoseMessage
      document.querySelector("#outcomeShown").textContent = data.outcome
    });

}

