//Receive user input (choice)
let playerChoice;
let scoreComputer = 0;
let scorePlayer = 0;
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
let choices = [rock, paper, scissors];
let setChoice = choices.map((choice) => {
    choice.addEventListener('click', () => {
        playerChoice = choice.getAttribute('id');
        playRound();
    });
})
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
    //Step 1: getComputerChoice
    const computerChoice = getComputerChoice();
    function whoWon(computerChoice, playerChoice) {
        //Determine winner
        if (computerChoice === 'Rock') {
            if (playerChoice === 'Rock') {
                return 'tie';
            } else if (playerChoice === 'Paper') {
                return 'winner';
            } else return 'loser';
        } else if (computerChoice === 'Paper') {
            if (playerChoice === 'Rock') {
                return 'loser'; 
            } else if (playerChoice === 'Paper') {
                return 'tie'; 
            } else return 'winner';
        } else if (computerChoice === 'Scissors') {
            if (playerChoice === 'Rock') {
                return 'winner';
            } else if (playerChoice === 'Paper') {
                return 'loser';
            } else return 'tie';
        }
    }
    //Display winner
    let resultBox = document.querySelector('#result');
    const outcome = whoWon(computerChoice, playerChoice);
        if (outcome === 'winner') {
            scorePlayer++;
            resultBox.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else if (outcome === 'loser') {
            scoreComputer++;
            resultBox.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            resultBox.textContent = `It's a tie between ${playerChoice.toLowerCase()}s!`;
        }
    let runningScoreBox = document.querySelector('#runningScore');
    runningScoreBox.textContent = `Player: ${scorePlayer} vs. Computer: ${scoreComputer}`;
    let finalScoreBox = document.querySelector('#finalScore');
    //The overall winner is the first to reach 5 points
    if (scoreComputer >= 5 || scorePlayer >= 5) {
        let btns = document.querySelector('#btns');
        btns.removeChild(rock);
        btns.removeChild(paper);
        btns.removeChild(scissors);
        let finalScore = `Final Score - You: ${scorePlayer} Computer: ${scoreComputer}`;
        let finalResult;
        if (scorePlayer > scoreComputer) {
            finalResult = 'You Win!!!'
        } else {
            finalResult = 'You Lost!'
        }   
        let finalMessage = finalScore + ' ' + finalResult;
        finalScoreBox.textContent = finalMessage;
        const newGame = document.createElement('button');
        newGame.setAttribute('id', 'newGame');
        newGame.textContent = 'New Game'
        document.body.appendChild(newGame);
        newGame.addEventListener('click', () => {
            scorePlayer = 0;
            scoreComputer = 0;
            resultBox.textContent = '';
            runningScoreBox.textContent = '';
            finalScoreBox.textContent = '';
            document.body.removeChild(newGame);
            btns.appendChild(rock);
            btns.appendChild(paper);
            btns.appendChild(scissors);
        });
    }
}