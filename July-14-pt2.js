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
// console.log("test", f([[1], [2], [3]]) === [1, 2, 3])

const nestedArray = (array) => {
  //first we want to intialize an empty array that will hold the flattened arrays
  let flatArray = [];
  //we want to loop over the first unnested array
  for (let i = 0; i < array.length; i++) {
    //then we check to make sure there is a nested array using array and isArray
    if (Array.isArray(array[i])) {
      // then we loop over the nested arrays
      for (let j = 0; j < array[i].length; j++) {
        //then push the index of the arrays into flattned array
        flatArray.push(array[i][j]);
      }
    } else {
      //if they aren't nested then push it directly
      flatArray.push(array[i]);
    }
  }
  //return flattendarray
  return flatArray;
};

console.log(nestedArray([[1], [3], [4], [6], 7]));
