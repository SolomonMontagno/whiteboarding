//Given an array of integers, return a new list that doubles each value

const arrayOne = [1,4, 5, 6]

const double = (array) => {
    let arrayTwo = []
    array.forEach(number =>{
           arrayTwo.push(number * 2)
    })
    return arrayTwo
}

const doubles = (array) => {
    let doubleHolder = []

    for(let i = 0; i < array.length; i++) {
        doubleHolder.push(array[i] * 2)
    }

    return doubleHolder
}

console.log(doubles(arrayOne))

