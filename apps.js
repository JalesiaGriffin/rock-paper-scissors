const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const roundResultDisplay = document.createElement('h1')
const gameResultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, roundResultDisplay, gameResultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'You: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            userScore++
            roundResultDisplay.innerHTML = 'YOU WIN'
            console.log(userScore)
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            computerScore++
            roundResultDisplay.innerHTML = 'LOSER!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            roundResultDisplay.innerHTML = 'ITS A TIE'
            break
    }


if (userScore === 5){
    gameResultDisplay.innerHTML = "You've won the game!"
}
else if (computerScore === 5) {
        gameResultDisplay.innerHTML = "You've lost the game"
        
    }
}