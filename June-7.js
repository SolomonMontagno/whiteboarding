//Given an array of integers, return a list of all odd numbers found in the list


const array = [1,2,3,4,5,6]

const oddNumbers = () =>{
    let arrayTwo = []
    array.forEach(number => {
        if(number % 2 !== 0){
            arrayTwo.push(number)
        }
    });
    return arrayTwo
}

const oddNumbers2 = () => {
    let holders = []

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            holders.push(array[i])
        }
    }
    return holders
}

console.log(oddNumbers2(array))