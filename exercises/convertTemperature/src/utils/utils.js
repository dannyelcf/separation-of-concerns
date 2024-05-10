import {
  SPACE,
  TEMPERATURE_INPUT,
  CONVERT_TEMPERATURE_CONTAINER,
  MESSAGE_ERROR_NOT_INTEGER,
} from '../constants.js';

export const convertedTemperature = (fahrenheitTextList) => {
  if (!/^[0-9\s]*$/.test(fahrenheitTextList)) {
    window.alert(MESSAGE_ERROR_NOT_INTEGER).replace('%s', fahrenheitTextList);
  }

  // Sanitize it
  const fahrenheitList = fahrenheitTextList.trim().split(SPACE);
  const convertedTemperatures = fahrenheitList.map((fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
  }).join(' ');
  return convertedTemperatures;
};
export default convertedTemperature;
