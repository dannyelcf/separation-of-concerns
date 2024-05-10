import { replaceWith } from './util.js';

export const replaceWithHandler = () => {
    () => {
        debugger;
        // read & process user input
        const stringToReplacify = prompt('enter a string to replaceify');
        if (stringToReplacify === null) {
          alert('good bye');
          return;
        }
      
        const oldChar = prompt('enter a character to replace');
        if (oldChar === null) {
          alert('good bye');
          return;
        }
        if (oldChar.length !== 1) {
          alert(`"${oldChar}" is not a single character`);
          return;
        }
      
        const newChar = prompt(`enter a character to replace "${oldChar}"`);
        if (newChar === null) {
          alert('good bye');
          return;
        }
        if (newChar.length !== 1) {
          alert(`"${newChar}" is not a single character`);
          return;
        }

        const newString = replaceWith(stringToReplacify, oldChar, newChar);
      
        // communicate result to user
        alert(`${stringToReplacify}\n${newString}`);
      }
};
