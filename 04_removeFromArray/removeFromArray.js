const removeFromArray = function (arr, ...values) {
  const newArr = [];
  arr.forEach((element) => {
    if (!values.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
