

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
function linearSearch(arr, target) {

  
    //loop through the array and stop looping when you reached end of the array
    //conditional statement to check if the value of a given index is equal to the target
     // Found the target at index i
      //if it is return the index of the target
    }

; // Target not found
