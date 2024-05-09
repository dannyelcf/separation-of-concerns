import { saveNoCopies } from './utils.js';
import { state } from '../data/state.js';

export const saveNoCopiesHandler = () => {
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }

  // execute core logic
  const alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
    data.noCopies.push(userInput);
  }

  // communicate result to user
  const message = data.noCopies.join(', ');
  alert(message);

  // log interaction
  console.log(data);
};
