// I realise now that the way I used these 'impure fuctions' is not good form
// Would do it differently if i were to write this again

const makeCase = function(input, style) {
  const arr1 = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const arr2 = ['vowel', 'consonant'];
  const arr3 = ['upper', 'lower']; 
  if (Array.isArray(style)) {
    for (let i = 0; i < arr1.length; i++) {
      let element = arr1[i];
      if (style.includes(element)) {
        switch (element) {
          case "camel":
            input = camelCase(input);
            break;
          case "pascal":
            input = pascalCase(input);
            break;
          case "snake":
            input = snakeCase(input);
            break;
          case "kebab":
            input = kebabCase(input);
            break;
          case "title":
            input = titleCase(input);
        }
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      let element = arr2[i];
      if (style.includes(element)) {
        switch (element) {
          case "vowel":
            input = vowelCase(input);
            break;
          case "consonant":
            input = consonantCase(input);
        }
      }
    }
    for (let i = 0; i < arr3.length; i++) {
      let element = arr3[i];
      if (style.includes(element)) {
        switch (element) {
          case "upper":
            input = input.toUpperCase();
            break;
          case "lower":
            input = input.toLowerCase();
        }
      }
    }
  } else {
    switch (style) {
      case "camel":
        input = camelCase(input);
        break;
      case "pascal":
        input = pascalCase(input);
        break;
      case "snake":
        input = snakeCase(input);
        break;
      case "kebab":
        input = kebabCase(input);
        break;
      case "title":
        input = titleCase(input);
        break;
      case "vowel":
        input = vowelCase(input);
        break;
      case "consonant":
        input = consonantCase(input);
        break;
      case "upper":
        input = input.toUpperCase();
        break;
      case "lower":
        input = input.toLowerCase();
    }
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

function camelCase(input) {
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

function pascalCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === " ") {
      element = "";
    } else if (input[i - 1] === " ") {
      element = element.toUpperCase();
    }
    if (i === 0) {
      element = element.toUpperCase();
    }
    result += element;
  }
  return result;
}

function snakeCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === " ") {
      element = "_";
    }
    result += element;
  }
  return result;
}

function kebabCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === " ") {
      element = "-";
    }
    result += element;
  }
  return result;
}

function titleCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (input[i - 1] === " ") {
      element = element.toUpperCase();
    }
    if (i === 0) {
      element = element.toUpperCase();
    }
    result += element;
  }
  return result;
}

function vowelCase(input) {
  let result = "";
  for(let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === 'a' ||
        element === 'e' ||
        element === 'i' ||
        element === 'o' ||
        element === 'u') {
          element = element.toUpperCase();
    }
    result += element;
  }
  return result;
}

function consonantCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element !== 'a' &&
        element !== 'e' &&
        element !== 'i' &&
        element !== 'o' &&
        element !== 'u') {
          element = element.toUpperCase();
    }
    result += element;
  }
  return result;
}