var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if(!Array.isArray(iterable)){
      iterable = iterable.split('');
    }
    
    let newArray = [];
    for (let i =0; i < iterable.length; i++){
      if(i ===0 || iterable[i] !== iterable[i-1]) {
        newArray.push(iterable[i]);
      }
    }
    return newArray;
  }