const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomCard() {
  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function calculateScore(cards) {
  let score = 0;
  let hasAce = false;

  for (let card of cards) {
    if (card === "A") {
      hasAce = true;
      score += 11;
    } else if (["K", "Q", "J"].includes(card)) {
      score += 10;
    } else {
      score += parseInt(card);
    }
  }

  // Handle Ace as 1 if adding 11 would cause bust
  while (hasAce && score > 21) {
    score -= 10;
    hasAce = false; // Consider only one Ace as 11
  }

  return score;
}

function displayGameStatus(playerCards, dealerCards, playerScore, dealerScore, revealDealer) {
  console.log(`\nYour cards: ${playerCards.join(", ")} (Score: ${playerScore})`);
  console.log(`Dealer's cards: ${revealDealer ? dealerCards.join(", ") : dealerCards[0] + ", ?"}`);
}

function checkBlackjack(playerScore, dealerScore) {
  if (playerScore === 21) {
    console.log("Congratulations! You got a Blackjack!");
    endGame();
  } else if (dealerScore === 21) {
    console.log("Dealer got a Blackjack. You lose!");
    endGame();
  }
}

function endGame(playerCards, dealerCards, playerScore, dealerScore) {
  console.log(`\nYour final cards: ${playerCards.join(", ")} (Score: ${playerScore})`);
  console.log(`Dealer's final cards: ${dealerCards.join(", ")} (Score: ${dealerScore})`);

  if (playerScore === dealerScore) {
    console.log("It's a tie!");
  } else if (dealerScore > 21 || (dealerScore < playerScore && playerScore <= 21)) {
    console.log("Congratulations! You win!");
  } else {
    console.log("Dealer wins. You lose!");
  }

  rl.close();
  process.exit();
}


function playGame() {
  const playerCards = [getRandomCard(), getRandomCard()];
  const dealerCards = [getRandomCard(), getRandomCard()];

  let playerScore = calculateScore(playerCards);
  let dealerScore = calculateScore(dealerCards);

  displayGameStatus(playerCards, dealerCards, playerScore, dealerScore);
  checkBlackjack(playerScore, dealerScore);

  function promptUser() {
    rl.question("Do you want to hit or stand? (h/s): ", (answer) => {
      if (answer.toLowerCase() === "h") {
        playerCards.push(getRandomCard());
        playerScore = calculateScore(playerCards);

        if (playerScore > 21) {
          console.log("Bust! You went over 21. You lose!");
          endGame(playerCards, dealerCards, playerScore, dealerScore);
        } else {
          displayGameStatus(playerCards, dealerCards, playerScore, dealerScore, false);
          checkBlackjack(playerScore, dealerScore);
          promptUser();
        }
      } else if (answer.toLowerCase() === "s") {
        console.log("You chose to stand. Dealer's turn.");
        dealerTurn();
      } else {
        console.log('Invalid input. Please enter "h" to hit or "s" to stand.');
        promptUser();
      }

      // Move checkBlackjack inside here
      // checkBlackjack(playerScore, dealerScore);
    });
  }

  function dealerTurn() {
    while (dealerScore < 17) {
      dealerCards.push(getRandomCard());
      dealerScore = calculateScore(dealerCards);
      console.log(`Dealer hits. Dealer's cards: ${dealerCards.join(", ")} (Score: ${dealerScore})`);
    }

    console.log("Dealer stands.");
    displayGameStatus(playerCards, dealerCards, playerScore, dealerScore, true);
    endGame(playerCards, dealerCards, playerScore, dealerScore);
  }

  promptUser();
}

console.log("Welcome to Blackjack!");
playGame();
