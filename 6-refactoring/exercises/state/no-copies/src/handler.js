import { saveNoCopies } from './util.js';
import { state } from '../data/state.js';

export const saveNoCopiesHandler = () => {
    // read & process user input
let userInput = null;
while (userInput === null) {
  userInput = prompt('enter a string to save');
}
  // communicate result to user
const message = saveNoCopies(userInput);
alert(message);
// log interaction
console.log(message);
};
export default saveNoCopiesHandler;