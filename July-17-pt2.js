//Given an array of numbers, write a function that will return whether the array 
//is sorted (low-to-high) or unsorted


const f = (array) => {
    const sortedArray = [...array].sort((a, b) => a - b)
    if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
        console.log(sortedArray)
        return "sorted low to high"
    } else {
    return "unsorted"
    }
}

console.log("test low to high", f([1, 4, 5, 6]) === "sorted low to high")
console.log("test unsorted", f([1, 4, 3, 2, 100]) === "unsorted")

const sortedArray = (array) => {
    const sortArr = [...array].sort((a, b) => a - b) 
        if(JSON.stringify(array) === JSON.stringify(sortArr)) {
            return "sorted low to high"
        } else {
            return 'Unsorted'

        }
    }


    console.log('test sortedArray', sortedArray([2,4,5,1,3,1]))
    console.log('test sortArray', sortedArray([1,2,3,4,5]))