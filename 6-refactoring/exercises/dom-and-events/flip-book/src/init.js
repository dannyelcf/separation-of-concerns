import {REVERSE_INPUT,REVERSED_OUTPUT,KEY_UP} from "../data/constants";
import './listener.js' 
// listener//

// document.get... addEventListener('typeEvent', handler)
// ----------------------listener-----------------------------|--handler-- till line 25--|
/*document.getElementById(REVERSE_INPUT).addEventListener(KEY_UP,(event) => {
  debugger;
  // read and process user input
  const input = event.target.value;
  console.log(event)

  // execute core logic- utils
  const upperCased = input.toUpperCase();
  const splitted = upperCased.split('');
  const reversed = splitted.reverse();
  const reversedUppercase = reversed.join('');

  // render result for user
  document.getElementById(REVERSED_OUTPUT).innerHTML = reversedUppercase;

  // log result for developers
  console.log('\n --- user action ---');
  console.log('input:', input);
  console.log('reversedUppercase:', reversedUppercase);
});*/
