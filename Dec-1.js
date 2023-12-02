//Given a string, write a function that removes duplicate characters in the string keeping only the first occurrences. 
//For example, if the input is tree traversal, the output will be “tre avsl”


const removeDuplicates = (string) => {
    //we have a string we need to iterate over
    let seenChar = {}
    let result = ''
    for (let i = 0; i < string.length; i++) {
// while iterating we need to check for duplicates
        let currentChar = string[i]
        if(!seenChar[currentChar]) {
            result += currentChar
            seenChar[currentChar] = true
        }
}
//then we need to remove duplicates from the string
    return result
}

console.log(removeDuplicates('tree traversal'))



// Write a function that takes two strings as arguments and returns a string containing 
//only the characters found in both strings

const twoStrings = (string1, string2) => {
    let result = ''
    
    

    for (let i = 0; i <string1.length; i++ ){
        let currentChar = string1[i]

        for(let j = 0; j < string2.length; j++){
            let currentChar2 = string2[j]

            if(currentChar === currentChar2 && result.indexOf(currentChar) === -1){
            result += currentChar
        }
        }

        
    }
    return result
}

console.log(twoStrings('trees', 'bees'))