
function printEvenNumbers(numberArray) {
    let result = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
    result.push(numberArray[i]);
    console.log(numberArray[i]);
    }
  }
return result;
}

// console.log(printEvenNumbers([1,2,3,4,5,6,7,8]));