// Import the readline module for handling user input
const readline = require('readline');

// Create a readline interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to get a random card from a standard deck
function getRandomCard() {
  // Create an array of card values from 2 to Ace
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  // Generate a random index within the length of the array
  const randomIndex = Math.floor(Math.random() * cards.length);
  // Return the card value at the random index
  return cards[randomIndex];
}

// Define a function to calculate the score of a hand
function calculateScore(cards) {
  // Initialize a variable score to 0
  let score = 0;
  // Initialize a variable hasAce to false
  let hasAce = false;

  // For each card in cards:
  for (let card of cards) {
    // If the card is an Ace:
    if (card === 'A') {
      // Set hasAce to true
      hasAce = true;
      // Add 11 to the score
      score += 11;
    } else if (['K', 'Q', 'J'].includes(card)) {
      // Else if the card is a face card (King, Queen, Jack):
      // Add 10 to the score
      score += 10;
    } else {
      // Else (numeric card):
      // Add the numeric value of the card to the score
      score += parseInt(card);
    }
  }

  // Handle Ace as 1 if adding 11 would cause bust
  // While hasAce is true and the score is greater than 21:
  while (hasAce && score > 21) {
    // Subtract 10 from the score (treat Ace as 1)
    score -= 10;
    // Set hasAce to false
    hasAce = false;
  }

  // Return the final score
  return score;
}

// Define a function to display the game status
function displayGameStatus(playerCards, dealerCards, playerScore, dealerScore, revealDealer) {
  // Print the player's cards and score
  console.log(`\nYour cards: ${playerCards.join(', ')} (Score: ${playerScore})`);
  // If revealDealer is true:
  if (revealDealer) {
    // Print the dealer's cards and score
    console.log(`Dealer's cards: ${dealerCards.join(', ')} (Score: ${dealerScore})`);
  } else {
    // Else:
    // Print only the first card of the dealer followed by a question mark
    console.log(`Dealer's cards: ${dealerCards[0]}, ?`);
  }
}

// Define a function to check for a Blackjack
function checkBlackjack(playerScore, dealerScore) {
  // If the player has a score of 21:
  if (playerScore === 21) {
    // Print a message indicating the player got a Blackjack
    console.log('Congratulations! You got a Blackjack!');
    // Call the endGame function
    endGame();
  } else if (dealerScore === 21) {
    // Else if the dealer has a score of 21:
    // Print a message indicating the dealer got a Blackjack
    console.log('Dealer got a Blackjack. You lose!');
    // Call the endGame function
    endGame();
  }
}


// Define a function to end the game
function endGame(playerCards, dealerCards, playerScore, dealerScore) {
  // Print the final cards and scores for both the player and dealer
  console.log(`\nYour final cards: ${playerCards.join(', ')} (Score: ${playerScore})`);
  console.log(`Dealer's final cards: ${dealerCards.join(', ')} (Score: ${dealerScore})`);

  // If the player's score is equal to the dealer's score:
  if (playerScore === dealerScore) {
    // Print a message indicating a tie
    console.log('It\'s a tie!');
  } else if (dealerScore > 21 || (dealerScore < playerScore && playerScore <= 21)) {
    // Else if the dealer's score is greater than 21 or the player's score is greater than the dealer's score:
    // Print a message indicating the player wins
    console.log('Congratulations! You win!');
  } else {
    // Else:
    // Print a message indicating the dealer wins
    console.log('Dealer wins. You lose!');
  }

  // Close the readline interface
  rl.close();
  // Exit the process
  process.exit();
}

// Define the main function to play the game
function playGame() {
  // Initialize arrays for playerCards and dealerCards with two random cards each
  const playerCards = [getRandomCard(), getRandomCard()];
  const dealerCards = [getRandomCard(), getRandom
