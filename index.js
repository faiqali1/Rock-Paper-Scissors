

function computerPlay() {

    let options = ["rock", "paper", "scissor"] ;

                // gives a value between 0 and 2  
    return options[Math.floor(Math.random() * 3 )]; 
}


function playRound (human , bot){

if (human == bot) return "draw..." ;

if (human == "rock" && bot == "scissor" || human == "scissor" && bot == "paper" || human == "paper" && bot == "rock"  ) return "You Won!";
else return "you lost...";

}





























