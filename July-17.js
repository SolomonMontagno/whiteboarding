//Given an array of integers, create a function that returns true 
//if all numbers found in the array are even, otherwise return false

const f = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0) {
            return false
        }
    }
    return true
}


console.log("test even", f([2, 4, 6]) === true)
console.log("test odd", f([1,4,6]) === false)