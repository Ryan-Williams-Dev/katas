let prompt = require("prompt-sync")();

let solved = false;
let count = 0;
const range = 10;
let target = Math.floor(Math.random() * range);

while(solved === false) {
  let answer = prompt(`Guess a number between 0 and ${range}: `);
  count++;
  console.log(`> You answered: ${answer}`);
  if (Number(answer) === target) {
    console.log(`You got it! You took ${count} attempts!`);
    solved = true;
    break;
  }
  if (Number(answer) > target) {
    console.log('Too High!');
  }
  if (Number(answer) < target) {
    console.log('Too Low!');
  }
}
