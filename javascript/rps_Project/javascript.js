function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
    let rand = getRandomInt(0,3);
    const compOptions = ["rock", "paper", "scissors"];
    var choice;
    if(rand == 0) choice = compOptions[0];
    else if(rand == 1) choice = compOptions[1];
    else choice = compOptions[2];
    
    return choice;
}

function playerPlay(){
    var choice = window.prompt("Please enter a choice osend invite rock, paper, or scissors: ");
    return choice;
}

let compChoice = computerPlay();
let playerChoice = playerPlay();

function playRound(compChoice, playerChoice){
    if(compChoice == playerChoice){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\nno one wins, draw!");
    }
    else if(compChoice == "scissors" && playerChoice == "paper"){
         console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
    }
    else if(compChoice == "paper" && playerChoice == "rock"){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
    }
    else if(compChoice == "rock" && playerChoice == "scissors") {
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
    }
    else{
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + playerChoice + " beats " + compChoice + "\nplayer wins!");
    }
}

playRound(compChoice, playerChoice);

