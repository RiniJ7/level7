function sumOfNumbers(inputArray) {
  let sumOfArray = 0;
  for (let i = 0; i <= inputArray.length - 1; i++) {
    sumOfArray = sumOfArray + inputArray[i];
  }
  console.log(sumOfArray);
}
sumOfNumbers([1, 2, 3, 4, 5, 6]);
