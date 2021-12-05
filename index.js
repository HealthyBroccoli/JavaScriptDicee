var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
const player = [player1, player2];

for (var i = 0; i < 2; i++) {
  switch (player[i]) {
    case 1:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice1.png";
      break;
    case 2:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice2.png";
      break;
    case 3:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice3.png";
      break;
    case 4:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice4.png";
      break;
    case 5:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice5.png";
      break;
    case 6:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice6.png";
      break;
    default:
      break;
  }
}

if (player1 > player2) {
  console.log("Player 1 Wins");
  document.getElementById("result").innerHTML = "🚩 Player 1 Wins";
} else if (player2 > player1) {
  console.log("Player 2 Wins");
  document.getElementById("result").innerHTML = "Player 2 Wins 🚩";
} else {
  console.log("Draw");
  document.getElementById("result").innerHTML = "Draw";
}
