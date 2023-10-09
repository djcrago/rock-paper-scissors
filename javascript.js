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
console.log('getComputerChoice:', getComputerChoice());
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
console.log('playerSelection:', playerSelection());
//Determine winner
function whoWon(getComputerChoice, playerSelection) {
    let winner;
    if (getComputerChoice === 'rock') {
        if (playerSelection == 'rock') {
            winner = 'tie';
            return winner;
        } else if (playerSelection == 'paper') {
            winner = 'player';
            return winner;
        } else if (playerSelection == 'scissors') {
            winner = 'computer';
            return winner;
        }
    }
    if (getComputerChoice === 'paper') {
        return winner;
    }
    if (getComputerChoice === 'scissors') {
        return winner;
    }
}
console.log(whoWon());

//Display who won
//Need a way to play multiple times (five)
//Need a system to keep track of scores
//Determine overall winner
//Display overall winner