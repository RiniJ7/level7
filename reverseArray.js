// create a function that reverses an array

function reverseArray(arrayInput) {
  let arrayOutput = [];
  for (let i = arrayInput.length - 1; i >= 0; i--) {
    arrayOutput.push(arrayInput[i]);
  }
  console.log(arrayOutput);
  return arrayOutput;
}

reverseArray([1, 2, 3, 4]);
