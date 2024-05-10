import { list } from './util.js';
import { bulletPoint } from '../data/constants.js';

export const listHandler = () => {
    () => {
        // read & process user input
        const allInputs = [];
        let acceptingInput = true;
        while (acceptingInput) {
          const nextInput = prompt('enter a list item');
          if (nextInput !== null) {
            allInputs.push(nextInput);
          } else {
            acceptingInput = false;
          }
        }
      
        // execute core logic
        const stringList = list(allInputs);
      
        // communicate result to user
        const message = `all items:${stringList}`;
        alert(message);
      }

};
