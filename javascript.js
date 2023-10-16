//Step 1: Receive user input (choice)
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
let choices = [rock, paper, scissors];
let playerChoice;
let getChoice = choices.map((choice) => { //add EventListener and set playerChoice in one step
    choice.addEventListener('click', () => {
        playerChoice = choice.getAttribute('id');
        playRound();
    });
})
let scoreComputer = 0; //if inside playRound they would be reset to 0 each click
let scorePlayer = 0;
function playRound() {
    function getComputerChoice() { //computer makes its choice randomly
        let selector = Math.floor(Math.random() * 100);
        if (selector > 66) {
            return 'Rock';
        } else if (selector < 33) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }
    function roundResult(computerChoice, playerChoice) { //determine winner
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
    //Step 2: getComputerChoice
    const computerChoice = getComputerChoice();
    //Step 3: Display winner of round
    const outcome = roundResult(computerChoice, playerChoice);
    let resultBox = document.querySelector('#roundResult');
    if (outcome === 'winner') {
        scorePlayer++;
        resultBox.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (outcome === 'loser') {
        scoreComputer++;
        resultBox.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        resultBox.textContent = `It's a tie between ${playerChoice.toLowerCase()} and ${computerChoice.toLowerCase()}!`;
    }
    //Step 4: Update running score
    let runningScoreBox = document.querySelector('#runningScore');
    runningScoreBox.textContent = `Scores - Player: ${scorePlayer} vs. Computer: ${scoreComputer}`;
    //Step 5: End game
    if (scoreComputer >= 5 || scorePlayer >= 5) { //overall winner is first to reach 5 points
        let btns = document.querySelector('#btns');
        for (choice of choices) { //remove buttons to deny further playerChoices
            btns.removeChild(choice);
        }
        //Step 6: Display winner of game
        runningScoreBox.textContent = '';
        let finalScoreBox = document.querySelector('#finalScore');
        let finalScore = `Final Score - You: ${scorePlayer} vs. Computer: ${scoreComputer} - You `;
        if (scorePlayer > scoreComputer) {
            finalScore += 'Win!!!'
        } else {
            finalScore += 'Lost!'
        }   
        finalScoreBox.textContent = finalScore;
        //Step 7: Reset game
        const newGame = document.createElement('button');
        newGame.textContent = 'New Game'
        document.body.appendChild(newGame);
        newGame.addEventListener('click', () => {
            scorePlayer = 0;
            scoreComputer = 0;
            resultBox.textContent = '';
            finalScoreBox.textContent = '';
            for (choice of choices) {
                btns.appendChild(choice);
            }
            document.body.removeChild(newGame);
        });
    }
}