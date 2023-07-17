//Given an array of arrays, create a function that 
//puts all elements in a single array (without using the JS Array method .flat())

// const f = (array) => {
//     let flatArray = [].concat.apply([], array)
//     console.log(flatArray)
//     return flatArray
// }

const f = (array) => {
    const flatArray = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                flatArray.push(array[i][j]);
            }
        } else {
            flatArray.push(array[i]);
        }
    }

    return flatArray;
};
console.log("test", f([[1], [2], [3]]) === [1, 2, 3])