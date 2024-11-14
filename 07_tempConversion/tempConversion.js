const convertToCelsius = function (temp) {
  const celsiusTemp = ((temp - 32) * 5) / 9;
  const roundedTemp = Math.round(celsiusTemp * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function (temp) {
  const fahrenheitTemp = (temp * 9) / 5 + 32;
  const roundedTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
