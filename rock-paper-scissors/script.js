function getComputerChoice() {
  let index = Math.floor(Math.random()*3);
  let choices = ["rock", "paper", "scissors"];
  return choices[index];
}

let playerScore = 0;
let computerScore = 0;

function playOneRound(playerSelection, computerSelection) {
  const winCombos = {
    'rock': 'scissors',
    'paper':'rock',
    'scissors': 'paper'
  };
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    playerScore ++;
    computerScore++;
    return "It's a tie!";
  } else if (winCombos[playerSelection] == computerSelection) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("div.result");
const ps = document.querySelector(".player-score");
const cs = document.querySelector(".comp-score");
buttons.forEach(button => button.addEventListener("click", 
function() {
  result.textContent = playOneRound(this.classList[0], getComputerChoice());
    ps.textContent = `Player: ${playerScore}/5 points`;
    cs.textContent = `Computer: ${computerScore}/5 points`;
  if (playerScore == 5 && playerScore > computerScore) {
    result.textContent = "You won the game!";
  } else if (computerScore == 5 && computerScore > playerScore) {
    result.textContent = "Computer won the game!";
  } else if (playerScore == computerScore && playerScore == 5) {
    result.textContent = "Both of you won the game!";
}}));


