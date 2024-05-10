/**
 *
 */
import state from '../data/state.js';

export const saveNoCopies = () => {
    let userInput = null;
    while (userInput === null) {
      userInput = prompt('enter a string to save');
    }
  
    // execute core logic
    const alreadySaved = state.data.noCopies.includes(userInput);
    if (!alreadySaved) {
      state.data.noCopies.push(userInput);
    }
  
    // communicate result to user
    return state.data.noCopies.join(', ');
};
