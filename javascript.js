//Need a way to initialize game
function game() {
//Computer makes its choice randomly
function playRound() {
    function getComputerChoice() {
        let selector = Math.floor(Math.random() * 100);
        if (selector > 66) {
            return 'Rock';
        } else if (selector < 33) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }
    const computerChoice = getComputerChoice();
    //Receive user input (choice)
        //Must accept all spellings
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    function playerSelection() {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === 'rock') {
            return playerChoice = 'Rock';
        } else if (playerChoice ==='paper') {
            return layerChoice = 'Paper';
        } else if (playerChoice === 'scissors') {
            return playerChoice = 'Scissors'
        }
        else {
            return playerChoice = 'Invalid';
        }
    }
    const playerChoice = playerSelection();
    //Determine winner
    function whoWon(computerChoice, playerChoice) {
        function outcome(computerChoice, playerChoice) {
            if (playerChoice === 'Invalid') {
                return 'invalid';
            } else if (computerChoice === 'Rock') {
                if (playerChoice === 'Rock') {
                    return 'tie';
                } else if (playerChoice === 'Paper') {
                    return 'winner';
                } else {
                    return 'loser';
                }
            } else if (computerChoice === 'Paper') {
                if (playerChoice === 'Rock') {
                    return 'loser'; 
                } else if (playerChoice === 'Paper') {
                    return 'tie'; 
                } else {
                    return 'winner';
                }
            } else if (computerChoice === 'Scissors') {
                if (playerChoice === 'Rock') {
                    return 'winner';
                } else if (playerChoice === 'Paper') {
                    return 'loser';
                } else {
                    return 'tie';
                }
            } 
        }
        const outcometh = outcome(computerChoice, playerChoice);
        if (outcometh === 'invalid') {
            return "Enter a valid choice!"
        } else if (outcometh === 'winner') {
            return `You Win! ${playerChoice} beats ${computerChoice}`
        } else if (outcometh === 'loser') {
            return `You Lose! ${computerChoice} beats ${playerChoice}`
        } else {
            return "It's a tie!"
        }
    }
    let result = whoWon(computerChoice, playerChoice);
    return result;
    }
//Need a way to play multiple times (five)
let gameResult;
let scoreComputer = 0;
let scorePlayer = 0;
let n = 2;
//I added these console.logs so that you can see the gameResult (ex. 'Game 1: You Lose! Paper beats Rock') from the first game whether the console is narrow or wide
console.log('');
console.log('');
console.log('');
console.log('');
for (let i = 1; i < n; i++) {
    gameResult = playRound();
    //Display who won
    console.log(`Game ${i}: ${gameResult}`)
    //Need a system to keep track of scores
    let resultName = gameResult.substr(4, 2);
    if (resultName === 'Wi') {
        scorePlayer++;
    } else if (resultName === 'Lo') {
        scoreComputer++;
    } else if (resultName === ' a') {
        n++
    } else {
        i--
    }
}
//Determine overall winner
let finalScore = `Final Score\nYou: ${scorePlayer}\nComputer: ${scoreComputer}\n`;
//Display overall winner
let finalResult;
if (scorePlayer > scoreComputer) {
    finalResult = 'You Win!!!'
} else {
    finalResult = 'You Lost!'
}
let finalMessage = finalScore + finalResult;
console.log(finalMessage);
}