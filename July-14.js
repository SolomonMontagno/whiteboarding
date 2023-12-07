//Given a word, create a function that returns the same word without any vowels

// const f = (word) => {
//     if (word.toLowerCase().includes("o")) {
//         return word.replace("o", "")
//     }
//     if (word.toLowerCase().includes("a")) {
//         return word.replace("a", "")
//     }
    
// }

const f = (word) => {
    return word.toLowerCase().replace(/[aeiouy]/gi, '')
}

console.log("test", f("word") === "wrd")
console.log("test2", f("a") === "")
console.log("test3", f("why") === "wh")
console.log("test", f("moat") === "mt")


const noVowels = (word) => {
    return word.toLowerCase().replace(/[aeiouy]/gi, '')

}

console.log("test", noVowels('word') === 'word')
