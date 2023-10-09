//Need a way to initialize game
function game() {
//Computer makes its choice randomly
function getComputerChoice() {
    let selector = Math.floor(Math.random() * 100);
    if (selector > 66) {
        return 'rock';
    } else if (selector < 33) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
const computerChoice = getComputerChoice();

//Receive user input (choice)
    //Must accept all spellings
function playerSelection() {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        console.log("Invalid choice");
    } else {
        return playerChoice;
    }
}
const playerChoice = playerSelection();

//Determine winner
function whoWon(computerChoice, playerChoice) {
    function outcome(computerChoice, playerChoice) {
        if (computerChoice == 'rock') {
            if (playerChoice == 'rock') {
                return 'tie';
            } else if (playerChoice == 'paper') {
                return 'winner';
            } else {
                return 'loser';
            }
        } else if (computerChoice == 'paper') {
            if (playerChoice == 'rock') {
                return 'loser'; 
            } else if (playerChoice == 'paper') {
                return 'tie'; 
            } else {
                return 'winner';
            }
        } else if (computerChoice == 'scissors') {
            if (playerChoice == 'rock') {
                return 'winner';
            } else if (playerChoice == 'paper') {
                return 'loser';
            } else {
                return 'tie';
            }
        }
    }
    const outcometh = outcome(computerChoice, playerChoice);
    if (outcometh == 'winner') {
        return `You Win! ${playerChoice} beats ${computerChoice}`
    } else if (outcometh == 'loser') {
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else {
        return "It's a tie!"
    }
}
let result = whoWon(computerChoice, playerChoice);
return result;
}
//Display who won
let gameResult = game();
console.log(gameResult);
//Need a way to play multiple times (five)
//Need a system to keep track of scores
//Determine overall winner
//Display overall winner