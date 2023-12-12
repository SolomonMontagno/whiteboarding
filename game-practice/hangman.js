// Import the readline-sync module for handling user input
 const readlineSync = require('readline-sync');
// Set the target word for the hangman game
let word = 'danielle'
// Split the target word into an array of characters
let splitWord = word.split('')
// Initialize an array to represent the current state of guessed letters
let guessedLetters = Array(splitWord.length).fill('_')
// Initialize variables to track incorrect guess count and the incorrect letters
let incorrectCount = 0
let incorrectLetters = []
// Function to display the current state of the game
const currentStateOfGame = () => {
    // Log the current state of the guessed word, the incorrect guess count, and remaining guess
    console.log('Word:', guessedLetters.join(' '))
    console.log('Incorrect guesses:', incorrectLetters)
    console.log('Remaining guesses:', (word.length - incorrectCount))
    
}

// Function to handle each guess
    const checkGuess = () => {
        // Get user input for the guess by initializing guess variable = to readLineSync.keyIn and establish which characters count.
        let guess = readlineSync.keyIn('Please enter a letter for your guess:', { limit: 'abcdefghijklmnopqrstuvwxyz'}).toLocaleLowerCase()
        // Check if the guessed letter is in the target word
        if(splitWord.includes(guess)){
            // loop over split word and check if split word at given index is equal to the user guess
            for(let i = 0; i < splitWord.length; i++){
                if(splitWord[i] === guess) {
                    // Update the guessed word based on the correct guess
                    guessedLetters[i] = guess
                }
            }
        } else {
            //if guess is incorrect record guess and update count and console.log wrong guess
            incorrectLetters.push(guess)
            console.log('Wrong. Guess does not contain:', guess)
            incorrectCount++
        }
        // Check if the word has been completely guessed
        if(guessedLetters.join('') === word) {
            console.log('Congratulation! You guessed the right word')
            return
        } else {
            // Display the current state of the game
            currentStateOfGame()

        }
        // Check if the maximum allowed incorrect guesses have been reached
            if(incorrectCount >= word.length) {
                console.log('You lose. Too many incorrect guess')
                return
            }
            // Recursive call to continue the game
            checkGuess()
    }
 
    // Initial display of the word and start the game
    currentStateOfGame()
    checkGuess()





