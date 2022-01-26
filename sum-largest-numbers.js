const sumLargestNumbers = function(data) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < data.length; i++) {
      if (data[i - 1] > data[i]) {
        done = false;
        let tmp = data[i - 1];
        data[i - 1] = data[1];
        data[i] = tmp;
      }
    }
  }
  return data[data.length - 1] + data[data.length - 2];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));