import {
  SPACE_REGEX,
  TEMPERATURES_INPUT,
  CONVERT_TEMPERATURE_CONTAINER,
} from './data/constants.js';

document
  .getElementById(TEMPERATURES_INPUT)
  .addEventListener('change', (event) => {
    //debugger; // each time the user changes the 'temperatures' input

    const convertedTemperaturesContainer = document.getElementById(
      CONVERT_TEMPERATURE_CONTAINER,
    );

    // Erase previous content
    convertedTemperaturesContainer.innerHTML = '';

    // Get the text input
    const fahrenheitTextList = event.target.value;

    // Validade it
    if (fahrenheitTextList) {
      if (!/^[0-9\s]*$/.test(fahrenheitTextList)) {
        window.alert(
          `The '${fahrenheitTextList}' contains values different of integer numbers`,
        );
        return;
      }

      // Sanitize it
      const fahrenheitList = fahrenheitTextList.trim().split(SPACE_REGEX);
      fahrenheitList.forEach((fahrenheit) => {
        // Do the math
        const celsius = ((fahrenheit - 32) * 5) / 9;

        // Render the result
        const liString = `<li class="number-item">${celsius.toFixed(2)}</li>`;

        convertedTemperaturesContainer.innerHTML =
          convertedTemperaturesContainer.innerHTML + liString;
      });
    }
  });
