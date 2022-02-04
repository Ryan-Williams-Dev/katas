const squareCode = function(message) {
  let tempMsg = message.replace(/ /g, "");
  let sqrt = Math.ceil(Math.sqrt(tempMsg.length));
  let returnMsg = "";

  for (let i = 0; i < sqrt; i++) {
    for (let j = i; j < (sqrt * sqrt); j += sqrt) {
      if (tempMsg[j] === undefined) {
        break;
      }
      returnMsg += tempMsg[j];
    }
    returnMsg += "\n"  /* Can switch this out for a " " to match the expected output from the challenge definition.
                          I wasn't sure if it mattered, I just preffered the look of it this way */
  }

  return returnMsg;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));