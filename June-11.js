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

const multiply = (n1, n2) => {
    let sum = 0

    for(let i = 1; i <= n2; i++){
        sum += n1
    }
    return sum
}

console.log('multiply', multiply(3, 4))


const multiply2 = (n1,n2) => {
    let sum = 0
    for(let i = 1; i <= n2; i++){
        sum += n1
    }
    return sum
}

console.log(multiply2(3,4))


const reverse = (string) => {

    let reversed = ''
    for(let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    return reversed
}

console.log(reverse('words'))