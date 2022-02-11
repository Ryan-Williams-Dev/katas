const blocksAway = function(directions) {
  let east = 0;
  let north = 0;
  const compass = ['north', 'east', 'south', 'west'];
  let compassIndex = 0; // 0 = north, 1 = east, 2 = south, 3 = west
  if (directions[0] === 'right') {
    compassIndex++;
    east += directions[1];
  } else if (directions[0] === 'left') {
    north += directions[1];
  }
  for (let i = 2; i < directions.length; i += 2) {
    let distance = directions[i + 1];
    if (directions[i] === 'right') {
      compassIndex++;
    } else if (directions[i] === 'left') {
      compassIndex--;
    }
    switch (compass[compassIndex]) {
      case 'north':
        north += distance;
        break;
      case 'east':
        east += distance;
        break;
      case 'south':
        north -= distance;
        break;
      case 'west':
        east -= distance;
    }
    console.log(compass[compassIndex]);
  }
  const result = {
    east: east,
    north: north
  }
  return result;
}
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


/* need to fix the negatives */