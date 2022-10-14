console.log("hello world!");

let diceStatus = document.getElementById("dice-status");
const btnPlay = document.getElementById("btn-play");
const diceImg = document.getElementById("dice-img");

//
//

let randomDice;
btnPlay.addEventListener("click", function () {
  randomDice = Math.floor(Math.random() * 6 + 1);
  console.log(randomDice);

  if (randomDice == 1) {
    diceImg.src = "images/1.png";
    btnPlay.setAttribute("disabled", "disabled");
    diceStatus.innerHTML = "আপনার  কানা উঠেছে!!! ";
  }

  if (randomDice == 2) {
    diceImg.src = "images/2.png";
  }

  if (randomDice == 3) {
    diceImg.src = "images/3.png";
  }

  if (randomDice == 4) {
    diceImg.src = "images/4.png";
  }

  if (randomDice == 5) {
    diceImg.src = "images/5.png";
  }

  if (randomDice == 6) {
    diceImg.src = "images/6.png";
  }
});
