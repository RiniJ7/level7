function sumPairs(ints, s) {
  
    const numbers = new Set();
    for ( let num of ints) {
      const complement = s- num;
      
      if(numbers.has(complement)){
        
        return[complement, num];
      }
      numbers.add(num);
    }
    return undefined ;
  }