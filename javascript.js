//Need a way to initialize game

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
console.log('Computer:', computerChoice);

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
console.log('Player:', playerChoice);

//Determine winner
function whoWon(computerChoice, playerChoice) {
    console.log('get:', computerChoice);
    console.log('player:', playerChoice);
    let winner;
    if (computerChoice == 'rock') {
        if (playerChoice == 'rock') {
            winner = 'tie';
        } else if (playerChoice == 'paper') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
        return winner;
    }
    if (computerChoice == 'paper') {
        if (playerChoice == 'rock') {
            winner = 'computer';
            return winner;
        } else if (playerChoice == 'paper') {
            winner = 'tie';
            return winner;
        } else {
            winner = 'player';
            return winner;
        }
    }
    if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            winner = 'player';
            return winner;
        } else if (playerChoice == 'paper') {
            winner = 'computer';
            return winner;
        } else {
            winner = 'tie';
            return winner;
        }
    }
}

//Display who won
console.log('Winner:', whoWon(computerChoice, playerChoice));

//Need a way to play multiple times (five)
//Need a system to keep track of scores
//Determine overall winner
//Display overall winner