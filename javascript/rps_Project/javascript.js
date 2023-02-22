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

//let compChoice = computerPlay();
//let playerChoice = playerPlay();

function playRound(){
    let compChoice = computerPlay();
    let playerChoice = playerPlay();
    if(compChoice == "scissors" && playerChoice == "paper"){
         console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
         return 1;
    }
    else if(compChoice == "paper" && playerChoice == "rock"){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
        return 1;
    }
    else if(compChoice == "rock" && playerChoice == "scissors") {
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + compChoice + " beats " + playerChoice + "\ncomputer wins!");
        return 1;
    }
    else if(compChoice == "scissors" && playerChoice == "rock"){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + playerChoice + " beats " + compChoice + "\nplayer wins!");
        return 2;
    }
    else if(compChoice == "rock" && playerChoice == "paper"){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + playerChoice + " beats " + compChoice + "\nplayer wins!");
        return 2;
    }
    else if(compChoice == "paper" && playerChoice == "scissors"){
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\n" + playerChoice + " beats " + compChoice + "\nplayer wins!");
        return 2;
    }
    else{
        console.log("computer chose " + compChoice + "\nplayer chose " + playerChoice + "\nno one wins, draw!");
    }
}

//playRound(compChoice, playerChoice);

//console.log(playRound(compChoice, playerChoice));

function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++){
        console.log("Round: " + (i + 1));
        let victory = playRound();
        if(victory == 1)
            compScore++;
        else
            playerScore++;
    }
    console.log("Computer Score: " + compScore + " points\nPlayer Score: " + playerScore + " points");
    if(compScore > playerScore){
        console.log("Computer wins! Good game!");
    }
    else if(compScore < playerScore){
        console.log("Player wins! Good game!");
    }
    else{
        console.log("Draw! Good game!");
    }
}

game();