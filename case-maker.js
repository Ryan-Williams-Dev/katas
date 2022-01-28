const camelCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === " ") {
      element = "";
    } else if (input[i - 1] === " ") {
      element = element.toUpperCase();
    }
    result += element;
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));