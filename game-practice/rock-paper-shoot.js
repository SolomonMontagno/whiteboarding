const rockPaperShoot = (rps) => {
  let choices = ["rock", "paper", "scissors"];
  let playerChoice = rps.toLowerCase();
  let computerChoiceIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[computerChoiceIndex];
  console.log("Rock, Paper, shoot!");
  if (playerChoice === computerChoice) {
    console.log("It is a tie! Try again");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(
      `Congratulations player wins with ${playerChoice}. The computer choice is ${computerChoice}`
    );
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(
      `Congratulations player wins with ${playerChoice} The computer choice is ${computerChoice}`
    );
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(
      `Congratulations player wins with ${playerChoice}. The computer choice is ${computerChoice}`
    );
  } else {
    console.log(`Computer wins with ${computerChoice}`);
  }
};

rockPaperShoot("rock");
