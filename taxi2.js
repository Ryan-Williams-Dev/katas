const blocksAway = function(directions) {
  const distance = {east : 0, north: 0};

  let taxiFacing = (directions[0] === "right") ? 'east' : 'north';
  distance[taxiFacing] += directions[1];
  
  for (let i = 2; i < directions.length - 1; i += 2) {
    const steps = directions[i + 1];
    taxiFacing = turn(taxiFacing, directions[i]);
    if (taxiFacing === 'north') distance.north += steps;
    if (taxiFacing === 'east') distance.east += steps;
    if (taxiFacing === 'south') distance.north -= steps;
    if (taxiFacing === 'west') distance.east -= steps;
  }
  return distance;
};

const turn = (currentD, turn) => {
  let newD = '';
  if (currentD === 'north') {
    turn === 'right' ? newD = 'east' : newD = 'west'; 
  }
  if (currentD === 'east') {
    turn === 'right' ? newD = 'south' : newD = 'north';
  }
  if (currentD === 'south') {
    turn === 'right' ? newD = 'west' : newD = 'east';
  }
  if (currentD === 'west') {
    turn === 'right' ? newD = 'north' : newD = 'south';
  }
  return newD;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
