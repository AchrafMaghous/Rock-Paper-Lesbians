const choices = ["Rock", "Paper", "Scissors"]
function getComputerChoice(array) {
	const randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

let score = 0;

function playRound(playerSelection, computerSelection) {
  playerSelectionLow = playerSelection.toLowerCase();
  computerSelectionLow = computerSelection.toLowerCase();

  if (playerSelectionLow === computerSelectionLow) {
    return "It's a tie!";
  } else if (
    (playerSelectionLow === "rock" && computerSelectionLow === "scissors") ||
    (playerSelectionLow === "paper" && computerSelectionLow === "rock") ||
		(playerSelectionLow === "scissors" && computerSelectionLow === "paper")
	) {
		score++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}




function game() {
	for (let i = 0; i < 5; i++) {
		console.log(`Round: ${i}`)
		const playerSelection = prompt("Enter your choice!")
		const ComputerSelection = getComputerChoice(choices)
		console.log(playRound(playerSelection, ComputerSelection))
	}
	console.log(`Final Score: ${score}`)
	if (score >= 3)
		console.log("You won!")
	else
		console.log("You lost!")
}

game()