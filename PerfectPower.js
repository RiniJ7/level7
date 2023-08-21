var isPP = function(n){
    for(let m = 2; m * m <= n; m++) {
      let k = 2;
      while (Math.pow(m,k) <= n) {
        if (Math.pow(m,k) === n) {
          return [m,k];
        }
        k++;
      }
    }
    return null; // fix me
  }