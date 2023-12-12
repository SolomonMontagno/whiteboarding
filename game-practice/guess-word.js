const readline = require('readline')

const guessWord = (word) => {
    let computerWord = ['place', 'book', 'bug', 'comment', 'robot']
    let randomIndex = Math.floor(Math.random() * computerWord.length)
    let computerChoice = computerWord[randomIndex]
    let guessCount = 0
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const askForGuess = () => {
        rl.question('Enter your guess' , (playerWord) => {
            playerWord = playerWord.toLowerCase().trim()

            if(playerWord !== computerChoice) {
                console.log(`${playerWord} is incorrect`)
                guessCount += 1
                console.log(`You have ${3 - guessCount} guesses left`)
                
                if(guessCount < 3) {
                    askForGuess()
                } else {
                    console.log(`You are out of guesses. The correct word is ${computerChoice}`)
                    rl.close()
                }
            } else {
                console.log(`${playerWord} is correct. You won!`)
                rl.close()
            }
        })
    }
    console.log('Welcome to the Word Guessing Game!')
    askForGuess()
}

guessWord()

