const conditionalSum = function(values, condition) {
  let total = 0;
  let cond;
  switch (condition) {
    case 'even':
      cond = 0;
      break;
    case 'odd':
      cond = 1;
  }
  for (let i = 0; i < values.length; i++) {
    if(values[i] % 2 == cond) {
      total += values[i];
    }
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));