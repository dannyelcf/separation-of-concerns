import {
  SPACE,
  TEMPERATURE_INPUT,
  CONVERT_TEMPERATURE_CONTAINER,
  MESSAGE_ERROR_NOT_INTEGER,
} from './constants.js';
import convertedTemperature from './utils/utils.js';
const handlers = (event) => {
  debugger; // each time the user changes the 'temperatures' input
  const convertedTemperaturesContainer = document.getElementById(
    CONVERT_TEMPERATURE_CONTAINER,
  );
  // Erase previous content
  convertedTemperaturesContainer.innerHTML = '';
  // Get the text input
  const fahrenheitTextList = event.target.value;
  let convertedTemp = convertedTemperaturesContainer.innerHTML;
  // Validate it
  if (fahrenheitTextList) {
    var convertedTempTextList = convertedTemperature(fahrenheitTextList);
    const convertedTemperaturesLst = '';
    const convertedTempList = convertedTempTextList.trim().split(SPACE);
    convertedTempList.forEach((celsius) => {
      // Render the result
      const liString = `<li class="number-item">${celsius}</li>`;
      convertedTemp = convertedTemp + liString;
    });
    convertedTemperaturesContainer.innerHTML = convertedTemp;
  }
};
export default handlers;