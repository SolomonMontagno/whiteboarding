//Given an array of integers, write a function to find the most frequent integer in the array


const intArrayFind = (array) => {
    let mostFrequent = null;
    let frequency = 0
    let repeatedInt = {}

    for(let i = 0; i < array.length; i++) {
        const currentInt = array[i]

    if(repeatedInt[currentInt] === undefined){
        repeatedInt[currentInt] = 1
    } else {
        repeatedInt[currentInt]++
    }

    if(repeatedInt[currentInt] > frequency){
            mostFrequent = currentInt 
            frequency = repeatedInt[currentInt]
        }

    }
    return mostFrequent
}

console.log(intArrayFind([1,4,3,5,4,4,4]))