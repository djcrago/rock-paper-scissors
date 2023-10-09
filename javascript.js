//Need a way to initialize game
function game() {
    //Computer makes its choice randomly
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
    function playerSelection() {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        playerChoice = playerChoice.toLowerCase();
        if (true) {
            if (playerChoice === 'rock') {
                playerChoice = 'Rock';
            } else if (playerChoice ==='paper') {
                playerChoice = 'Paper';
            } else {
                playerChoice = 'Scissors'
            }
        }
        if (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
            console.log("Invalid choice");
        } else {
            return playerChoice;
        }
    }
    const playerChoice = playerSelection();

    //Determine winner
    function whoWon(computerChoice, playerChoice) {
        function outcome(computerChoice, playerChoice) {
            if (computerChoice === 'Rock') {
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
        if (outcometh === 'winner') {
            return `You Win! ${playerChoice} beats ${computerChoice}`
        } else if (outcometh === 'loser') {
            return `You Lose! ${computerChoice} beats ${playerChoice}`
        } else {
            return "It's a tie!"
        }
    }
    let result = whoWon(computerChoice, playerChoice);

    //Display who won
    console.log(result);
    return result;
    }

//Need a way to play multiple times (five)
let gameResult;
let scoreComputer = 0;
let scorePlayer = 0;
for (let i = 0; i < 5; i++) {
    gameResult = game();
    let resultName = gameResult.substr(4, 1);
    console.log(resultName);
    if (resultName === 'W') {
        scorePlayer++;
    } else if (resultName === 'L') {
        scoreComputer++;
    }
    console.log(scoreComputer);
    console.log(scorePlayer);
}

//Need a system to keep track of scores

//Determine overall winner

//Display overall winner
