function dirReduc(arr){
  const opposites = {
    NORTH : "SOUTH",
    SOUTH : "NORTH",
    EAST : "WEST",
    WEST : "EAST"
  };
  const reducedDist = [];
  for (const direction of arr) {
    if(reducedDist.length > 0 && reducedDist[reducedDist.length - 1] === opposites[direction])
      {
        reducedDist.pop();
      }
    else {
      reducedDist.push(direction);
    }
  }
  return reducedDist;