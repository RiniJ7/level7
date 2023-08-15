function cleanString(s) {
    //   ... your code ...
      let result = [];
      for(let char of s){
        if(char === '#' && result.length > 0) {
          result.pop();
        } else if (char !== '#'){
          result.push(char);
        }
      }
      return result.join('');
    }