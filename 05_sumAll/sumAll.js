const sumAll = function (fromNum, toNum) {
  let sum = 0;
  if (fromNum > toNum) {
    for (toNum; toNum <= fromNum; toNum++) {
      sum += toNum;
    }
  } else if (
    Number.isInteger(fromNum) &&
    Number.isInteger(toNum) &&
    fromNum > 0
  ) {
    for (fromNum; fromNum <= toNum; fromNum++) {
      sum += fromNum;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

console.log(sumAll(1, [2, 400]));

// Do not edit below this line
module.exports = sumAll;
