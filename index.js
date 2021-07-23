let humanWins = 0;
let botWins = 0;
let round = 1;


function computerPlay() {
  let options = ["rock", "paper", "scissor"];

  // gives a value between 0 and 2
  return options[Math.floor(Math.random() * 3)];
}

function playRound(human, bot) {
  if (human == bot) return "draw...";

  if (
    (human == "rock" && bot == "scissor") ||
    (human == "scissor" && bot == "paper") ||
    (human == "paper" && bot == "rock")
  )
    return "You Won!";
  else return "you lost...";
}

function game(userChoice) {

   if (humanWins == 5 || botWins == 5) {
     alert("Reload the page to play again");
     return;
  }
    let human = userChoice;
    let bot = computerPlay();
    UpdateComputerPicture(bot);
    document.getElementById("number").innerHTML = round;


    // console.log("Computer Chose: " + bot + "\n");

        // incrementing the winner
    if (playRound(human, bot) == "You Won!"){ 
        humanWins++
        document.getElementById("user-wins").innerHTML = humanWins;
        document.getElementById("result").innerHTML = "You win...";
    } 
    else if (playRound(human, bot) == "draw..."){
        document.getElementById("result").innerHTML = "Draw....";
    } 
    else { // bot wins...
        botWins++;
        document.getElementById("computer-wins").innerHTML = botWins;
        document.getElementById("result").innerHTML = "You lose...";
    }
    round++;
    // console.log("\n"+ "humanwins :" + humanWins);
    // console.log("botwins :" +botWins);


   // document.getElementById("result").innerHTML = "Game Over You win!! ";
  if (humanWins == 5) return document.getElementById("result").innerHTML = "Game Over You win!! ";
  else if (botWins == 5) return document.getElementById("result").innerHTML = "Game Over try again!! ";
  else return "error";
}

function UpdateComputerPicture(CompChoice) {
 // let CompChoice = computerPlay();

  switch (CompChoice) {
    case "rock":
      document.getElementById("computer-img").src =
        "Assets/mycollection(pure)/svg/002-rock.svg";
      break;
    case "paper":
      document.getElementById("computer-img").src =
        "Assets/mycollection(pure)/svg/001-file.svg";
      break;
    case "scissor":
      document.getElementById("computer-img").src =
        "Assets/mycollection(pure)/svg/003-scissors.svg";
      break;

    default:
      console.log("error");
  }
}

// console.log(game());

// document.getElementById("computer-img").addEventListener("click", UpdateComputerPicture);


function userInput( user ) {
    userChoice=user;
}

// function setGameState() {
    
// }

