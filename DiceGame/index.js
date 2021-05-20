
// Set player 1 dice on refresh
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var dice1 = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].src = dice1;

// Set player 2 dice on refresh
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dice2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].src = dice2;

var resultText = "Refesh Me"
if (randomNumber1 === randomNumber2) {
    resultText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 Wins!";
} else {
    resultText = "Player 2 Wins!";
}
document.querySelector("h1").textContent = resultText;
