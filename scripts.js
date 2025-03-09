
function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissors'];
    const arrayIndex = Math.floor(Math.random() * array.length)
    const value = array[arrayIndex].toUpperCase()
    console.log(`Computer has chosen ${value}`)
    return value;
};

function getHumanChoice() {
    const choice = prompt('Rock, Paper or Scissors?');
    const answer = choice.toUpperCase();
    switch (answer) {
        case 'ROCK':
            console.log(`You have chosen ${answer}.`)
            break;

        case 'PAPER':
            console.log(`You have chosen ${answer}.`)
            break;
        
        case 'SCISSORS':
            console.log(`You have chosen ${answer}.`)
            break;

        default:
            console.log('Please enter a valid input.')
        }
    return answer;
};

let humanScore = 0;
let computerScore = 0;

function playRound() {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    
    if (humanChoice === computerChoice) {
        console.log('We have a draw!')
        computerScore++
    }
    else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        console.log('You lose. Rock beats Scissors.')
        computerScore++
    }
    else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        console.log('You lose. Scissors beat Paper.')
        computerScore++
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        console.log('You lose. Paper beats Rock.')
        computerScore++
    }
    else {
        console.log('You win!')
        humanScore++
    }
    console.log(`Computer score is ${computerScore}`)
    console.log(`Your score is ${humanScore}`)
};

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound()       
    }
    return {
        humanScore: humanScore,
        computerScore: computerScore
    }
};

console.log(playGame());

