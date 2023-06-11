const unsortedNumbers = [1, 5, 4, 2, 7, 3];

const sortNumbers = (numbers) => {
  const sortedNumbers = [];
  while (numbers.length > 0) {
    const min = Math.min(...numbers);
    sortedNumbers.push(min);
    numbers.splice(numbers.indexOf(min), 1);
  }
  return sortedNumbers;
};
