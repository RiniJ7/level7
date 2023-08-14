function solution(str){
    //declare empty array
     const pairs = [];
    for (let i = 0; i < str.length; i += 2){
      //checking if length is even
      if(i+1 < str.length){
        pairs.push(str.slice(i, i+2));
      } else {
        pairs.push(str[i] + '_');
      }
    }
    return pairs;
  }