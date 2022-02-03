const urlDecode = function(text) {
  let resultString = '{"' + text.replace(/%20/g, ' ').replace(/=/g, '":"').replace(/&/g, '","') + '"}';
  let resultObject = JSON.parse(resultString);
  return resultObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/* Decided to take a shot at using regular expressions in this challenge.
  They seem like a powerful tool */
