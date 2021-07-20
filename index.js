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

function game() {
  let humanWins = 0;
  let botWins = 0;

  while (humanWins != 5 || botWins != 5) {
    
    if (humanWins == 5 || botWins == 5) break;

    let human = "paper";
    let bot = computerPlay();
    UpdateComputerPicture(bot);


    
    // console.log("Computer Chose: " + bot + "\n");

    if (playRound(human, bot) == "You Won!") humanWins++;
    else if (playRound(human, bot) == "draw...") continue;
    else botWins++;

    // console.log("\n"+ "humanwins :" + humanWins);
    // console.log("botwins :" +botWins);
  }

  if (humanWins == 5) return "humans win";
  else if (botWins == 5) return "bots win";
  else return "error";
}


document.getElementById("myiamge").innerHTML = botWins++;




function UpdateComputerPicture(CompChoice) {
 // let CompChoice = computerPlay();

  switch (CompChoice) {
    case "rock":
      document.getElementById("computer-img").src =
        "/Assets/mycollection(pure)/svg/002-rock.svg";
      break;
    case "paper":
      document.getElementById("computer-img").src =
        "/Assets/mycollection(pure)/svg/001-file.svg";
      break;
    case "scissor":
      document.getElementById("computer-img").src =
        "/Assets/mycollection(pure)/svg/003-scissors.svg";
      break;

    default:
      console.log("error");
  }
}

// console.log(game());

document.getElementById("computer-img").addEventListener("click", UpdateComputerPicture);
