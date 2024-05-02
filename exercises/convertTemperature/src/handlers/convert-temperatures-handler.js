import {
  CONVERT_TEMPERATURE_CONTAINER,
  MESSAGE_ERROR_NOT_INTEGER,
} from '../data/constants.js';
import { fahrenheitToCelcius } from '../logic/convert-temperatures.js';
import { parseToNumberArray } from '../utils/parsers.js';
import { replacePlaceholders } from '../utils/strings.js';
import { containsOnlyNumbersAndSpaces } from '../utils/validators.js';

const prepareOutputContainer = () => {
  const convertedTemperaturesContainer = document.getElementById(
    CONVERT_TEMPERATURE_CONTAINER,
  );
  convertedTemperaturesContainer.innerHTML = '';
  return convertedTemperaturesContainer;
};

const renderOutputContainer = (outputContainer, celsiusList) => {
  celsiusList.forEach((celsius) => {
    const liString = `<li class="number-item">${celsius.toFixed(2)}</li>`;
    outputContainer.innerHTML = outputContainer.innerHTML + liString;
  });
};

const validateTextInput = (text) => {
  if (!text) {
    throw new Error();
  }

  if (!containsOnlyNumbersAndSpaces(text)) {
    throw new Error(replacePlaceholders(MESSAGE_ERROR_NOT_INTEGER, text));
  }
};

const convertTemperatures = (fahrenheitTextList) => {
  validateTextInput(fahrenheitTextList);
  const fahrenheitList = parseToNumberArray(fahrenheitTextList);
  const celsiusList = fahrenheitList.map((fahrenheit) => {
    return fahrenheitToCelcius(fahrenheit);
  });
  return celsiusList;
};

/**
 * Add an 'change' event listener to the element whose id is 'temperatures'.
 *
 * @param {Event} event - the 'change' event.
 */
export const convertTemperaturesHandler = (event) => {
  try {
    // Input
    const convertedTemperaturesContainer = prepareOutputContainer();

    // Logic
    const fahrenheitTextList = event.target.value;
    const celsiusList = convertTemperatures(fahrenheitTextList);

    // Output
    renderOutputContainer(convertedTemperaturesContainer, celsiusList);
  } catch (error) {
    if (error.message) {
      window.alert(error.message);
    }
  }
};
