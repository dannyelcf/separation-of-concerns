import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = (event) => {
  debugger;
  // read and process user input
  const input = event.target.value;
  console.log(event);

  // execute core logic- utils
  /*const upperCased = input.toUpperCase();
    const splitted = upperCased.split('');
    const reversed = splitted.reverse();*/
  const reversedUppercase = reverseAndUpper(input);

  // render result for user
  document.getElementById(REVERSED_OUTPUT).innerHTML = reversedUppercase;

  // log result for developers
  console.log('\n --- user action ---');
  console.log('input:', input);
  console.log('reversedUppercase:', reversedUppercase);
};
