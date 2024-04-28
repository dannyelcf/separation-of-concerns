debugger; // once when the program is initialized

document.getElementById('temperatures').addEventListener('change', (event) => {
  debugger; // each time the user changes the 'temperatures' input

  const convertedTemperaturesContainer = document.getElementById(
    'convertedTemperatures',
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
    }

    // Sanitize it
    const fahrenheitList = fahrenheitTextList.trim().split(/\s+/);

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
