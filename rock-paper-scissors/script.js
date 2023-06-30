function getComputerChoice() {
  let index = Math.floor(Math.random()*3);
  let choices = ["rock", "paper", "scissors"];
  return choices[index];
}

function playOneRound(playerSelection, computerSelection) {
  const winCombos = {
    'rock': 'scissors',
    'paper':'rock',
    'scissors': 'paper'
  };
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection,computerSelection)
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (winCombos[playerSelection] == computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (var i=0; i<5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerChoice();
    let result = playOneRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("You win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
  }
  if (playerScore>computerScore) {
    console.log(`You won the game with ${playerScore} points!`);
  } else if (playerScore<computerScore) {
    console.log(`You lost the game with ${playerScore} points`);
  } else {
    console.log("It's a tie overall!")
  }
}

game()