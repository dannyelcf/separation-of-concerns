
import { state } from '../data/state.js';

  export const saveNoCopies = (userInput) => {
    const alreadySaved = data.noCopies.includes(userInput);
    if (!alreadySaved) {
      data.noCopies.push(userInput);
    }
    // Communicate result to user
    return [...data.noCopies]; // Return a copy of the array
  };
  
  export default saveNoCopies;
  