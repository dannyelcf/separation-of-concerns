import {
  SPACE,
  TEMPERATURE_INPUT,
  CONVERT_TEMPERATURE_CONTAINER,
  MESSAGE_ERROR_NOT_INTEGER,
} from '../constants.js';
export const convertedTemperature = (fahrenheitTextList) => {
  if (!/^[0-9\s]*$/.test(fahrenheitTextList)) {
    window.alert(MESSAGE_ERROR_NOT_INTEGER.replace('%S', fahrenheitTextList));
  }
  // Sanitize it
  const fahrenheitList = fahrenheitTextList.trim().split(SPACE);
  var convertedTemperatures = '';
  fahrenheitList.forEach((fahrenheit) => {
    // Do the math
    const celsius = ((fahrenheit - 32) * 5) / 9;
    convertedTemperatures = convertedTemperatures + ' ' + celsius.toFixed(2);
  });
  return convertedTemperatures;
};
export default convertedTemperature;
