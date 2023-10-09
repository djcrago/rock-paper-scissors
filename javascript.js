//Need a way to initialize game
//Computer makes its choice randomly
function getComputerChoice() {
    let selector = Math.floor(Math.random() * 100);
    console.log(selector);
    if (selector > 66) {
        return 'rock';
    } else if (selector < 33) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

getComputerChoice();
console.log(getComputerChoice());

//Receive user input (choice)
    //Must accept all spellings
//Determine winner
//Display who won
//Need a way to play multiple times (five)
//Need a system to keep track of scores
//Determine overall winner
//Display overall winner