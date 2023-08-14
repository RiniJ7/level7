function expandedForm(num) {
    // Your code here
    const digit = num.toString().split('');
    const length = digit.length;
    let result = [];
    
    digit.forEach((digits,index)=> {
      if(digits !== '0') {
        result.push(digits.padEnd(length - index, '0'));
      }
    });
    return result.join(' + ')
  }

  