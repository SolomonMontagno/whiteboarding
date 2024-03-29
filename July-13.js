//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length. For example if "hi" and "hello" are given, it should return "hihellohi"



// const f = (a, b) => {
//     //1. Need to figure out the length of each string
//     let lenA = a.length
//     let lenB = b.length
//     //2. Compare a and b to see what is longest
//     let newString1 = ''
//     if (lenA > lenB) {
//         newString1 = `${b}${a}${b}`
//     } else {
//         newString1 = `${a}${b}${a}`
//     }
//     console.log(newString1)
//     return newString1
// }

// console.log("test 1", f('hi', 'hello') === "hihellohi")
// console.log("test 2", f('', 'a') === 'a')
// console.log("test 3", f('hello', 'hi') === 'hihellohi')

//ternary = condition
const f = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

console.log("test 1", f('hi', 'hello') === "hihellohi")
console.log("test 2", f('', 'a') === 'a')
console.log("test 3", f('hello', 'hi') === 'hihellohi')


function plusMinus(arr) {
    let negative = []
    let positive = []
    let zero = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positive.push(arr[i])
            return console.log(positive.length / arr.length)
        } else if(arr[i] === 0) {
        zero.push(arr[i])
    }
}
    return console.log(zero.length / arr.length)
}


//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length. For example if "hi" and "hello" are given, it should return "hihellohi"

const findShortLong = (a, b) => {
    let shortA = a.length
    let shortB = b.length
    let finalString = ''
    if(shortA > shortB) {
        finalString = `${b}${a}${b}`
    } else if (shortA < shortB) {
        finalString = `${a}${b}${a}`
    }
    return finalString
}


console.log(findShortLong('Solo', 'Daniel') === 'SoloDanielSolo')


const findFractions = (array) => {
    let positive = []
    let negative = []
    let zero = []

    for(let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
        positive.push(array[i])
    } else if(array[i] < 0) {
        negative.push(array[i])
    } else {
        zero.push(array[i])
    }
    }
    console.log('Positive fraction:', positive.length / array.length)
    console.log('negative fraction:', negative.length / array.length)
    console.log('Zero fraction:', zero.length / array.length)
}
let array = [-1, -3, 2, 0, 4, 0]
findFractions(array)