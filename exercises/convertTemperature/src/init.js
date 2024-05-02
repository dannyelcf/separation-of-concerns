debugger; // once when the program is initialized
import listener from './listener.js';

listener();

// document.getElementById(TEMPERATURE_INPUT).addEventListener('change', (event) => {
//   debugger; // each time the user changes the 'temperatures' input

//   const convertedTemperaturesContainer = document.getElementById(
//     CONVERT_TEMPERATURE_CONTAINER
//   );

//   // Erase previous content
//   convertedTemperaturesContainer.innerHTML = '';

//   // Get the text input
//   const fahrenheitTextList = event.target.value;

//   // Validate it
//   if (fahrenheitTextList) {
//     if (!/^[0-9\s]*$/.test(fahrenheitTextList)) {
//       window.alert(
//         MESSAGE_ERROR_NOT_INTEGER,
//       );
//     }

//     // Sanitize it
//     const fahrenheitList = fahrenheitTextList.trim().split(SPACE);

//     fahrenheitList.forEach((fahrenheit) => {
//       // Do the math
//       const celsius = ((fahrenheit - 32) * 5) / 9;

//       // Render the result
//       const liString = `<li class="number-item">${celsius.toFixed(2)}</li>`;

//       convertedTemperaturesContainer.innerHTML =
//         convertedTemperaturesContainer.innerHTML + liString;
//     });
//   }
// });
