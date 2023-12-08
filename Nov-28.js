//Given an array, write a function that returns the list of elements that occur more than once

const moreThanOnce = (array) => {
    let repeatedElement = []
    let elementCount = {}

    for(let i = 0; i < array.length; i++ ){
        const element = array[i]
        if(elementCount[element]) {
            elementCount[element] ++
        } else {
            elementCount[element] = 1
        }
    }

    for (let element in elementCount) {
        if(elementCount[element] > 1) {
            repeatedElement.push(element)
        }
    }
    return repeatedElement
}

moreThanOnce(['array', 'array', 'Hello', 'Goodbye', 'Hello', 'hi', 'bye'])
console.log(moreThanOnce([1, 2, 3, 3, 4, 4, 5]))
console.log(moreThanOnce(['array', 'array', 'Hello', 'Goodbye',])) 

const palindrome = (word) => {
    for(let i = 0, j = word.length - 1; i <= j; i++, j-- ) {
        if(word[i] !== word[j]) {
            return false
        }
    }
    return true
}


console.log(palindrome('word'))
console.log(palindrome('toot'))


//Given a string, write a function to return a hash/object that, for each letter, 
//stores an array of indices where that letter can be found. For example, 
//in the word "bee", "b" can be found at index 0, and "e" can be found at index 1 & 2


let string = 'hello world'
const returnHash = (string) => {
    let store = {}

    for(let i = 0; i < string.length; i++) {
// for letter I want create a key with the value of the index
        if(store[string[i]]) {
            store[string[i]].push(i)
        } else {
            store[string[i]] = [i]
        }
    }
    return store
}
console.log(returnHash(string))


const moreThanOncePt2 = (array) => {
    let elementCount = {}
    let repeatedElement = []

    for(let i = 0; i < array.length; i++){
        let element = array[i]
        if(elementCount[element]) {
            elementCount[element] ++
        } else {
            elementCount[element] = 1
        }
    }

    for(let element in elementCount){
        if(elementCount[element] > 1){
            repeatedElement.push(element)
        }
    }
    return repeatedElement
}

console.log('counting', moreThanOncePt2([1,3,4,4,5,5,7]))


const createHash = (string) => {
  let store = {}

  for(let i = 0; i < string.length; i++) {
    if(store[string[i]]) {
        store[string[i]].push(i)
    } else {
        store[string[i]] = [i]
    }
  }
  return store
}

console.log('createHash', createHash('burgers'))

