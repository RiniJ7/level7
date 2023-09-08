function arraySort(inputArray) {
    let swapped;
    do {
    swapped = false;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i+1] = temp;
        swapped = true;
    }
  }
} while(swapped);
  console.log(inputArray);
}

arraySort([12, 10, 3, 7, 4]);
