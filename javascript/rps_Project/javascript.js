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
    var choice = window.prompt("Please enter a choice of rock, paper, or scissors: ");
    return choice;
}

let compChoice = computerPlay();
//let playerChoice = playerPlay();
//console.log(playerChoice);
//console.log(compChoice);

function playRound(playerSelection, computerSelection) {
    console.log("hello there");
    if(computerSelection == "rock" && playerSelection == "paper"){
        console.log("computer chose " + computerSelection + "\nplayer chose " +_playerSelection + "\nrock beats paper\ncomputer wins!");
    }
}

playRound("paper","rock");