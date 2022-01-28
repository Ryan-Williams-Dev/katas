const repeatNumbers = function(data) {
  resultArr = [];
  for (let i = 0; i < data.length; i++) {
    let value = data[i][0];
    let repetitions = data[i][1];
    let resultStr = "";
    for (let j = 0; j < repetitions; j++) {
      resultStr += value;
    }
    resultArr.push(resultStr);
  }
  let result = "";
  for (let i = 0; i < resultArr.length; i++) {
    const element = resultArr[i];
    if (i > 0) {
      result += ", ";
      result += element;
    } else {
      result += element;
    }
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));