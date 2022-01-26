const numberOfVowels = function(data) {
  total = 0;
  vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if (data[i] === vowels[j]) {
        total++;
      }
    }
  }
  return total;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));