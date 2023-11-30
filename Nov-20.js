//Fibonacci sequence

const FibSequence = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};
console.log("FibTest", FibSequence(10));

//Factorial

const findFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
};

console.log("FacTest", findFactorial(5));

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log("lineSearch", linearSearch([1, 2, 3, 4, 6, 7, 10], 7));

const binSearch = (array, target) => {
    let left = 0
    let right = array.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2 )
        if( array[mid] === target) {
            return mid
        } else if(array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }
    return -1
}
console.log("binSearch", binSearch([1, 2, 4, 5, 6, 7, 8], 7));
