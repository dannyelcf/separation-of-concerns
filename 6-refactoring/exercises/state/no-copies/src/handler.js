import { saveNoCopies } from './util.js';
import { state } from '../data/state.js';

export const state = () => {
    () => {
        // read & process user input
        let userInput = null;
        while (userInput === null) {
          userInput = prompt('enter a string to save');
        }
      
        const alreadySaved = data.noCopies.includes(userInput);
       
        // communicate result to user
        const message = data.noCopies.join(', ');
        alert(message);
      
        // log interaction
        console.log(data);
    };
};
