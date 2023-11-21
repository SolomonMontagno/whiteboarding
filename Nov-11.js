

//Given a word create a function that will return true if is a palindrome or false 

const FindPalindrome = (word) => {
//function takes in a word

//initialize a holder for the new word

//we want to evaluate the word and see if is is the same backwards

//to do that we would need to iterate through the word
for (let i = 0, j = word.length - 1; i <= j; i++, j--) {
//so for each letter we now need to find its position and reverse it
    if( word[i] !== word[j]) {
        return false
}
}
return true
}


console.log('test1', FindPalindrome('toot'))
console.log('test2', FindPalindrome('code'))
console.log('test3', FindPalindrome('racecar'))
console.log('test4', FindPalindrome('tort'))

//Linear Search
//Input is the array you want to search and the target of the search

const linearSearch = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === target) {
            return i
        }
    }
    return -1
}

console.log('palindrome', linearSearch([1,3,4,5,6,7,8,9,10,10, 11], 10 ))


//given a string write a function that removes duplicate characters in the string keeping only the first occurrence  the function
 let string = 'tree traversal'
const removeDuplicates = (string) => {
    let singleCharacterString = ''
//loop over stirng
for(let i = 0; i < string.length; i++){
    if(!singleCharacterString.includes(string[i])) {
        singleCharacterString += string[i]
    }
}
//finds letter and pushes into the single character string
//check to see if it already exists if it does it moves on and ignores it
return singleCharacterString
}

console.log('testsingle', removeDuplicates(string))

const linearSearchPractice = (array, target) => {
//need to loop over the array to find the index of the target
for(let i = 0; i < array.length; i++){
    //conditional statement to check index against the target
    if (array[i] === target) {
        return i
    }
}
    return -1
}
console.log("palindrome@@@@@", linearSearchPractice([1, 3, 4, 5, 6, 7, 8, 9, 10], 6));


const binarySearchPractice = (array, target) => {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        mid = Math.floor((left + right) / 2 )

        if(array[mid] === target){
            return mid
        } else if(array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1 
}


console.log("binary:#", binarySearchPractice([1,2,3,5,6,7], 3))

const linearSearch2 = (array, target) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i
        }
    }
    return -1 
}
console.log("linear :D", linearSearch2([1, 2, 3, 5, 6, 7], 6));


 const palindrome = (word) => {
    for(let i = 0, j = word.length - 1; i < j; i++, j--){
        if(word[i] !== word[j]){
            return false
        }
    }
    return true
 }
console.log('testy', palindrome('toot'))
console.log("testy2", palindrome("tooter"));
console.log("testy", palindrome("tort"));
console.log("testy", palindrome("racecar"));
