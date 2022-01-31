const calculateChange = function(total, cash) {
  let changeLeft = cash - total;
  let changeObject = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  while (changeLeft > 0) {
    if (changeLeft >= 2000) {
      changeObject.twentyDollar += 1;
      changeLeft -= 2000;
    } else if (changeLeft >= 1000) {
      changeObject.tenDollar += 1;
      changeLeft -= 1000;
    } else if (changeLeft >= 500) {
      changeObject.fiveDollar += 1;
      changeLeft -= 500;
    } else if (changeLeft >= 200) {
      changeObject.twoDollar += 1;
      changeLeft -= 200;
    } else if (changeLeft >= 100) {
      changeObject.oneDollar += 1;
      changeLeft -= 100;
    } else if (changeLeft >= 25) {
      changeObject.quarter += 1;
      changeLeft -= 25;
    } else if (changeLeft >= 10) {
      changeObject.dime += 1;
      changeLeft -= 10;
    } else if (changeLeft >= 5) {
      changeObject.nickel += 1;
      changeLeft -= 5;
    } else if (changeLeft >= 1) {
      changeObject.penny += 1;
      changeLeft -= 1;
    }
  }
  for (const property in changeObject) {
    if (changeObject.property <= 0) {
      delete changeObject.property;
    }
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));