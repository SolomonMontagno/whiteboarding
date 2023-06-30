//Given a string, return a new string where each character that was lowercase is now uppercase, and each character that was uppercase is now lowercase
//split and or join
const string = "Hi Hello How Are You?"

const caseChange = (string) => {
    const resultArray = [];
    //2. Split string to make it iterable
    const splitString = string.split('')
    //3. Loop through the array and see if it is upper case or lower case
    splitString.forEach(letter => {
        //4. If it is lower push upper case version to new array
        if (letter === letter.toLowerCase()) {
            resultArray.push(letter.toUpperCase())
        } else { (letter === letter.toUpperCase())
            resultArray.push(letter.toLowerCase())
        }
    })
    //7. Change array into string and return new string
    const resultString = resultArray.join('')
    console.log("result string", resultString)
    //8. return new string
    return resultString
}

console.log("example works", caseChange(string) === "hI hELLO hOW aRE yOU?")
console.log("simple example works", caseChange("Hi") === "hI")
console.log("super simple example works", caseChange("a") === "A")
console.log("edge case example works", caseChange("1!") === "1!")