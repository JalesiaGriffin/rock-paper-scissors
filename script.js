// VARIABLES
let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let playerSelection;

game();

/* 
Function name: getComputerChoice
Parameters: 0

1. Uses random function to return
random number between 0-3
2. Returns string associated with
the number using switch statement.
*/

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'

    }
}

/*
Function name: playRound
Param: playerSelection (string)
Param: computerSelection (string)

1. Compares playerSelection to computerSelection
and declares a winner.
2. Updates playerScore and computerScore.
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon.");

        if (playerSelection === computerSelection) {
            document.write("Tie!");
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            document.write("You win! Rock beats Scissors.");
            playerScore++
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            document.write("You win! Scissors beats Paper");
            playerScore++
        }
        else if (playerSelection === "Paper" && computerSelection === "Rock") {
            document.write("You win! Paper beats Rock")
        }
        else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            document.write("You lose. Rock beats Scissors.");
            computerScore++
        }
        else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            document.write("You lose. Scissors beats Paper.");
            computerScore++
        }
        else if (computerSelection === "Paper" && playerSelection === "Rock")
            document.write("You lose. Paper beats Rock.");
            computerScore++
}

/**
 *  Function Name: game()
 * 
 *  1. Plays 5 rounds of the game using
 *  the playRound() function
 * 
 *  2. Determines a winner based on who
 *  has the highest score.
 */
function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        document.write('You win!');
    }
    else {
        document.write('Loser');
    }
}



