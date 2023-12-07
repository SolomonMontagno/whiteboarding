//Given an array of integers, create a function that returns true if all numbers found in the array are even, otherwise return false

const f = (array) => {
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] % 2 === 1){
    //         //if the remainder is 1, then the number is odd
    //         return false
    //     }
    // }
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 === 1) {
            // if the remainder is 1, then the number is odd
            return false
        }
        i++
    }

    return true
}

console.log("someOdd", f([1, 4, 5]) === false ? "passing" : "failing")
console.log("allEven", f([2, 4, 6]) === true ? "passing" : "failing")
console.log("allEven", f([2, 3]) === false ? "passing" : "failing")
console.log("noNumb", f([]) === true ? "passing" : "failing")


const trueOrFalse = (array) => {
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            return false
        } 
    }
    return true 
}

console.log(trueOrFalse([2,4,7]))