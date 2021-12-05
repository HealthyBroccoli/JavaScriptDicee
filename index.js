var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

const p1dice = 'images/dice' + player1 + '.png';
const p2dice = 'images/dice' + player2 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', p1dice)
document.querySelectorAll('img')[1].setAttribute('src', p2dice)

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
