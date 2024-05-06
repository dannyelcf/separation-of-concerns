import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = (event) => {
    
        debugger;
        // read and process user input
        const input = event.target.value;

  const reversedUppercase = reverseAndUpper(input);
  document.getElementById(REVERSED_OUTPUT).innerHTML = reversedUppercase;

  // log result for developers
  console.log('\n --- user action ---');
  console.log('REVERSE_INPUT', input);
  console.log('reversedUppercase:', reversedUppercase);
};