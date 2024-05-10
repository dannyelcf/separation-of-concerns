import { list } from './util.js';

export const listHandler = () => {
    () => {
        // read & process user input
        const allInputs = [];
        let acceptingInput = true;
        while (acceptingInput) {
          const nextInput = prompt('enter a list item, cancel when your are done');
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
