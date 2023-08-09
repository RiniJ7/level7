
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


//My solution

function findNb(m) {
    // your code
    let n = 1;
    let sum = 0;
    while(sum < m){
      sum += Math.pow(n,3)
      if (sum === m) return n;
      n++;
    }
    return (-1);
}



