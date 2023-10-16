//Receive user input (choice)
let playerChoice;
const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerChoice = 'Rock';
        playRound();
    });
const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerChoice = 'Paper';
        playRound();
    });
const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerChoice = 'Scissors';
        playRound();
    });

function playRound() {
    function getComputerChoice() {
        //Computer makes its choice randomly
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
            return `You Win! ${playerChoice} beats ${computerChoice}\n`
        } else if (outcometh === 'loser') {
            return `You Lose! ${computerChoice} beats ${playerChoice}\n`
        } else {
            return "It's a tie!\n"
        }
    }
    let result = whoWon(computerChoice, playerChoice);
    let scoreComputer = 0;
    let scorePlayer = 0;
    let resultName = result.substr(4, 2);
    if (resultName === 'Wi') {
        scorePlayer++;
    } else if (resultName === 'Lo') {
        scoreComputer++;
    }
    let finalScore = `Final Score\nYou: ${scorePlayer}\nComputer: ${scoreComputer}\n`;
    let finalResult;
    if (scorePlayer > scoreComputer) {
        finalResult = 'You Win!!!'
    } else {
        finalResult = 'You Lost!'
    }
    let finalMessage = result + finalScore + finalResult;
    let resultBox = document.querySelector('#result');
    resultBox.textContent = finalMessage;
    console.log(finalMessage);
    }
//Need a way to play multiple times (five)
//Determine overall winner
//Display overall winner

console.log(('Scissors' > 'Rock' && 'Rock' > 'Paper'));