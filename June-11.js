//Given a string representing a sentence, write a method that returns the longest word. If there’s a tie, output the longest word that’s found first


let string = "I am Helbrand secrectly Sauron, you are a fool."

const longestWord = (string) => {
    let str = string.split(" ")
    let longest = 0
    let word = ""
    str.forEach((currentWord) => {
        if(currentWord.length > longest){
            longest = currentWord.length
            word = currentWord
        }
    });
    return word
}


const longestWords = (string) => {
    let str = string.split(" ")
    let longest = 0
    let word = ""

    str.forEach((currentWord) => {
        if(currentWord.length > longest){
            longest = currentWord.length
            word = currentWord
        }
    })
    return word
}

console.log(longestWords(string))