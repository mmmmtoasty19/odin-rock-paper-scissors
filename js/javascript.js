
/**
 * Gets the computer choice for Rock Paper Scissors game
 * @returns {string} the computers choice
 */
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)  // returns 0, 1, or 2
  let computerChoice = "";

  switch (randomNum) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("The computer did not return a choice and had an error")
  }

  return computerChoice;
}

/**
 * Gets the human choice for Rock Paper Scissors game
 * @returns {string} the human choice
 */
function getHumanChoice() {
  let humanChoice = prompt("Enter your Choice: Rock, Paper, or Scissors").toLowerCase();

  if (!['rock','paper','scissors'].includes(humanChoice)) {
    alert("Enter a Valid Choice");
    humanChoice = prompt("Enter your Choice: Rock, Paper, or Scissors").toLowerCase();
  };

  return humanChoice;
}

/**
 * plays a single round of the game
 * @returns updates human and computer scores based on who won
 */

function playRound(humanChoice, computerChoice) {
  let message = "";
  let winner = "";

  if (humanChoice == computerChoice) {
    message = "You Tied! " + humanChoice + " ties " + computerChoice
  } else if (humanChoice == 'rock') {
    if (computerChoice == "scissors") {
      message = "You win! " + humanChoice + " beats " + computerChoice;
      winner = 'human'
    } else {
      message = "You lose! " + computerChoice + " beats" + humanChoice;
      winner = 'computer'
    }
  } else if (humanChoice == 'paper') {
    if (computerChoice == 'rock') {
      message = "You win! " + humanChoice + " beats " + computerChoice;
      winner = 'human'
    } else {
      message = "You lose! " + computerChoice + " beats " + humanChoice;
      winner = 'computer'
    }
  } else {
    if (computerChoice == 'paper') {
      message = "You win! " + humanChoice + " beats " + computerChoice;
      winner = 'human'
    } else {
      message = "You lose! " + computerChoice + " beats " + humanChoice;
      winner = 'computer'
    }
  }
  
  console.log(message);
  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  let round = 0;

  while (round < 5) {
    let winner = playRound(getHumanChoice(), getComputerChoice());
    if (winner == 'human'){
      humanScore++; 
    }
    if (winner == 'computer') {
      computerScore++;
    }

    round++
  }

  let gameWinner = humanScore > computerScore ? "You Win" : " You Lose"
  let message = `
    Game Over,
    Final Scores:
    Human: ${humanScore} Computer: ${computerScore}
    ${gameWinner}
  `

  console.log(message)
}

playGame()