const choices = ["Rock", "Paper", "Scissors"]
let score = 0;
let gameOver = false;

function getComputerChoice(array) {
	const randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}



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
    return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateScore(result) {
	if (result.includes("win"))
		score++
	else if (result.includes("lose"))
		score--;
	if (score >= 2 || score <= -2) {
		if (score >= 2) {
			document.getElementById("result").innerHTML += "<br>You won!"
			document.getElementById("play-again").style.display = "flex"
			document.getElementById("play-again").style.margin = "2rem auto"

		} else if (score <= -2) {
			document.getElementById("result").innerHTML += "<br>You lost!"
			document.getElementById("play-again").style.display = "flex"
			document.getElementById("play-again").style.margin = "2rem auto"
			document.getElementById("play-again").style.borderRadius = "5px"
			document.getElementById("play-again").style.backgroundColor = "red"

		}
		gameOver = true;
	}
}



function game(playerSelection) {
	if (gameOver)
		return;
	const computerSelection = getComputerChoice(choices);
	const result = playRound(playerSelection, computerSelection);
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = result;
	updateScore(result)
	const scoreDiv = document.getElementById("score");
	scoreDiv.innerHTML = `Score: ${score}`
}

function restartGame() {
	score = 0
	gameOver = false;
	document.getElementById("score").innerHTML = "Score: 0"
	document.getElementById("result").innerHTML = ""
	document.getElementById("play-again").style.display = "none"
}

document.getElementById("play-again").addEventListener("click", restartGame)