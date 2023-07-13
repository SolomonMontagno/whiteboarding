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